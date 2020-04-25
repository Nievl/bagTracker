async function newUser(req, res) {
  const collection = req.app.locals.db.collection("Users");
  if (!req.body) return res.sendStatus(400);

  try {
    const { name, status, description, userID } = req.body;
    const User = { name, status, description, userID };

    const result = await collection.insertOne(User);
    const data = result.ops;
    const response = { success: true, data };
    res.json(response);
  } catch (error) {
    console.log("error add User: ", error.message);
    const response = { success: false, description: error.message };
    res.json(response);
  }
}

module.exports = newUser;
