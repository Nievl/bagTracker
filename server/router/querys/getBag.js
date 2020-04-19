const { ObjectID } = require("mongodb");

async function getBag(req, res) {
  const collection = req.app.locals.db.collection("bags");
  try {
    const { id } = req.params;
    if (!id) throw new Error("_id is required");
    const _id = new ObjectID(id);

    const result = await collection.findOne({ _id });
    let response;

    if (result) {
      response = { success: true, data: result };
    } else {
      response = { success: false, description: "bag didn't find" };
    }

    res.json(response);
  } catch (error) {
    console.log("error find bag: ", error.message);
    const response = { success: false, description: error.message };
    res.json(response);
  }
}

module.exports = getBag;
