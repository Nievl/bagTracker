const { ObjectID } = require("mongodb");

async function newBag(req, res) {
  const collection = req.app.locals.db.collection("bags");
  if (!req.body) return res.sendStatus(400);

  try {
    const { name, status, description, userID: rawID } = req.body;
    const userID = rawID === "-1" ? rawID : new ObjectID(rawID);
    const bag = { name, status, description, userID };

    const result = await collection.insertOne(bag);
    const data = result.ops;
    const response = { success: true, data };
    res.json(response);
  } catch (error) {
    console.log("error add bag: ", error.message);
    const response = { success: false, description: error.message };
    res.json(response);
  }
}

module.exports = newBag;
