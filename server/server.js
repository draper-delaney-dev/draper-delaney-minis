const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../database/database.js");

const app = express();
const port = 3005;

app.use(express.static(`${__dirname}/build`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// eslint-disable-next-line no-unused-vars
app.get("/", (req, res) => {});

app.get("/metadata/", (req, res) => {
  console.log("reqbody", req.body);
  console.log("reqparams", req.params);
  console.log(req.query);
  const id = req.query ? req.query.id : 1;
  db.getGame(id, (err, data) => {
    if (err) {
      console.error("Failed data retrieval", err);
      res.sendStatus(500);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
