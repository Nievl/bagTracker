const { ObjectID } = require("mongodb");

async function editUser(req, res) {
  const collection = req.app.locals.db.collection("users");
  if (!req.body) return res.sendStatus(400);

  try {
    const { name, status, description, userID, id } = req.body;
    if (!id) throw new Error("_id is required");
    const User = { name, status, description, userID };
    const _id = new ObjectID(id);
    const result = await collection.findOneAndReplace({ _id }, User);

    if (result.ok === 0) throw new Error(result.errmsg);

    if (result.lastErrorObject.updatedExisting) {
      const data = await collection.findOne({ _id });
      const response = { success: true, data };
      res.json(response);
    } else {
      const response = { success: false, description: "User didn't find" };
      res.json(response);
    }
  } catch (error) {
    console.log("error edit User: ", error.message);
    const response = { success: false, description: error.message };
    res.json(response);
  }
}

module.exports = editUser;
