const { ObjectID } = require("mongodb");

async function deleteBag(req, res) {
  const collection = req.app.locals.db.collection("bags");

  try {
    const { id } = req.params;
    if (!id) throw new Error("_id is required");
    const _id = new ObjectID(id);

    const result = await collection.findOneAndDelete({ _id });

    if (result.ok === 0) throw new Error(result.errmsg);

    if (result.lastErrorObject.n === 1) {
      const response = { success: true };
      res.json(response);
    } else {
      const response = { success: false, description: "Bag didn't find" };
      res.json(response);
    }
  } catch (error) {
    console.log("error edit bag: ", error.message);
    const response = { success: false, description: error.message };
    res.json(response);
  }
}

module.exports = deleteBag;
