async function getBags(req, res) {
  const collection = req.app.locals.db.collection("bags");
  try {
    const result = await collection.find().toArray();
    let response;

    if (result) {
      response = { success: true, data: result };
    } else {
      response = { success: false, description: "bags didn't find" };
    }

    res.json(response);
  } catch (error) {
    console.log("error find bag: ", error.message);
    const response = { success: false, description: error.message };
    res.json(response);
  }
}

module.exports = getBags;
