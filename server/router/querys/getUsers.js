async function getUsers(req, res) {
  const collection = req.app.locals.db.collection("users");
  try {
    const { search } = req.query;
    let result;
    if (search) {
      result = await collection.find({ name: { $regex: search, $options: "i" } }).toArray();
    } else {
      result = await collection.find().toArray();
    }

    let response;

    if (result) {
      response = { success: true, data: result };
    } else {
      response = { success: false, description: "Users didn't find" };
    }

    res.json(response);
  } catch (error) {
    console.log("error find Users: ", error.message);
    const response = { success: false, description: error.message };
    res.json(response);
  }
}

module.exports = getUsers;
