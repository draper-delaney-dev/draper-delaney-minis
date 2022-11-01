require("dotenv").config();

const cors = require("cors");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("./twilioServices");
const db = require("./database/database");
const Joi = require("joi");
const schemas = require("./Joi/schemas");

// Create Express server
const app = express();

// Express configuration options
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.SERVER_PORT || 3024;

// Routes
// NOTE: Routes follow the error first callback pattern

/**
 * Create a new menu item
 */
app.post("/create-item", async (req, res) => {
  if (req.body) {
    const { error, value } = schemas.menuItemSchema.validate(req.body);
    if (error) {
      res.status(400).send(error);
    } else {
      db.create(value, (error, response) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send(response);
        }
      });
    }
  } else {
    res.status(400).send("No request body");
  }
});

/**
 * Get a menu item by id
 */
app.get("/get-item/:id", async (req, res) => {
  await db.get(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

/**
 * Get all menu items
 */
app.get("/get-all-items", async (req, res) => {
  await db.getAll((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

/**
 * Update a menu item by id
 */
app.put("/update-item/:id", async (req, res) => {
  if (req.body) {
    const { error, value } = Joi.validate(req.body, schemas.menuItemSchema);
    if (error) {
      res.status(400).send(error);
    } else {
      db.update(req.params.id, value, (error, response) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send(response);
        }
      });
    }
  } else {
    res.status(400).send("No request body");
  }
});

/**
 * Delete a menu item by id
 */
app.delete("/delete-item/:id", async (req, res) => {
  await db.remove(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Send SMS using Twilio API
app.post("/send-sms", async (req, res) => {
  if (req.body) {
    const { error, value } = Joi.validate(req.body, schemas.smsMessageSchema);
    if (error) {
      res.status(400).send(error);
    } else {
      twilio.sendSms(value, (error, response) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send(response);
        }
      });
    }
  } else {
    res.status(400).send("No request body");
  }
});

// Poll for new messages using Twilio API
app.get("/poll-messages", (req, res) => {
  twilio.pollExampleMessageFormat((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(PORT, () =>
  console.log(`twilio-video-app-react server running on ${PORT}`)
);
