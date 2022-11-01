require("dotenv").config();

const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// All of the database operations should follow the error-first callback pattern
// If the try succeeds, then error is null and response is the result (null, result)
// If the try fails, pass the error as the first argument to the callback (error, null)

// Queries -------------------------------------------------------------------------

/**
 * Create a new menu item
 * @param {*} document
 * @param {*} callback
 */
async function create(document, callback) {
  try {
    // Connect and choose the database and collection you want to work with
    await client.connect();
    const database = client.db("minis");
    const collection = database.collection("menuItems");

    // Perform your mongo operations here
    const response = await collection.insertOne(document);
    callback(null, response);
  } catch (error) {
    callback(error, null);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

/**
 * Get a menu item by id
 * @param {*} id
 * @param {*} callback
 * @returns
 * {
 * _id: 1,
 * name: "Burger",
 * price: 5.99,
 * description: "A delicious burger",
 * category: "Sandwiches",
 * }
 */
async function get(id, callback) {
  try {
    // Connect and choose the database and collection you want to work with
    await client.connect();
    const database = client.db("minis");
    const collection = database.collection("menuItems");

    // Perform your mongo operations here
    const response = await collection.findOne({
      _id: new ObjectId(id),
    });
    callback(null, response);
  } catch (error) {
    callback(error, null);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

/**
 * Get all menu items
 * @param {*} callback
 * @returns
 * [
 *  {
 *   _id: 1,
 *  name: "Burger",
 * price: 5.99,
 * description: "A delicious burger",
 * category: "Sandwiches",
 * },
 * {
 *  _id: 2,
 * name: "Fries",
 * price: 2.99,
 * description: "A delicious side of fries",
 * category: "Fried Foods",
 * },
 * ]
 */
async function getAll(callback) {
  try {
    // Connect and choose the database and collection you want to work with
    await client.connect();
    const database = client.db("minis");
    const collection = database.collection("menuItems");

    // Perform your mongo operations here
    const response = await collection.find({}).toArray();
    callback(null, response);
  } catch (error) {
    callback(error, null);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

/**
 * Update a menu item
 * @param {*} id
 * @param {*} document
 * @param {*} callback
 * @returns
 * {
 * _id: 1,
 * name: "Burger",
 * price: 5.99,
 * description: "A delicious burger",
 * category: "Sandwiches",
 * }
 */
async function update(id, document, callback) {
  try {
    // Connect and choose the database and collection you want to work with
    await client.connect();
    const database = client.db("minis");
    const collection = database.collection("menuItems");

    // Perform your mongo operations here
    const response = await collection.findOneAndUpdate(
      { _id: id },
      { $set: document },
      { returnOriginal: false }
    );
    callback(null, response);
  } catch (error) {
    callback(error, null);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

/**
 * Delete a menu item
 * @param {*} id
 * @param {*} callback
 * @returns
 * {
 * _id: 1,
 * name: "Burger",
 * price: 5.99,
 * description: "A delicious burger",
 * category: "Sandwiches",
 * }
 */
async function remove(id, callback) {
  try {
    // Connect and choose the database and collection you want to work with
    await client.connect();
    const database = client.db("minis");
    const collection = database.collection("menuItems");

    // Perform your mongo operations here
    const response = await collection.findOneAndDelete({ _id: id });
    callback(null, response);
  } catch (error) {
    callback(error, null);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

exports.create = create;
exports.get = get;
exports.getAll = getAll;
exports.update = update;
exports.remove = remove;
