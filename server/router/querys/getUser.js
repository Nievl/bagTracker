const { ObjectID } = require("mongodb");

async function getUser(req, res) {
  const collection = req.app.locals.db.collection("users");
  try {
    const { id } = req.params;
    if (!id) throw new Error("_id is required");
    const _id = new ObjectID(id);

    const result = await collection.findOne({ _id });
    let response;

    if (result) {
      response = { success: true, data: result };
    } else {
      response = { success: false, description: "User didn't find" };
    }

    res.json(response);
  } catch (error) {
    console.log("error find User: ", error.message);
    const response = { success: false, description: error.message };
    res.json(response);
  }
}

module.exports = getUser;
