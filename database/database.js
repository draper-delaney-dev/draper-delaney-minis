/* eslint-disable comma-dangle */
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/metadata", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("We're connected!");
});

// create our metadata Schema
const metaSchema = new mongoose.Schema({
  gameId: Number,
  singlePlayer: Boolean,
  onlineCoop: Boolean,
  lanCoop: Boolean,
  steamCloud: Boolean,
  eulaNotice: Boolean,
  languages: Array,
  rating: String,
  gameTitle: String,
  gameGenre: String,
  developer: String,
  publisher: String,
  franchise: String,
  releaseDate: Date,
  earlyAccessDate: Date,
});

// Create our metadata model
// Models are constructors compiled from Schemas. An instance of a model is called a document
const MetaModel = mongoose.model("MetaModel", metaSchema);

const getGame = (id = 1, callback) => {
  MetaModel.findOne({ gameId: id }, null, null, (err, metadata) => {
    if (err) {
      console.error("Error fetching game metadata", err);
      callback(err);
    } else {
      console.log("metadata", metadata);
      callback(null, metadata);
    }
  });
};

module.exports.db = db;
module.exports.getGame = getGame;
