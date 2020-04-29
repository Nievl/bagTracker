async function getBags(req, res) {
  const collection = req.app.locals.db.collection("bags");
  try {
    const { search } = req.query;
    let result;
    if (search) {
      result = await collection
        .aggregate([
          {
            $lookup: {
              from: "users",
              localField: "userID",
              foreignField: "_id",
              as: "user",
            },
          },
          {
            $unwind: {
              path: "$user",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $match: {
              $or: [
                { name: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
                { "user.name": { $regex: search, $options: "i" } },
              ],
            },
          },
        ])
        .toArray();
    } else {
      result = await collection
        .aggregate([
          {
            $lookup: {
              from: "users",
              localField: "userID",
              foreignField: "_id",
              as: "user",
            },
          },
          {
            $unwind: {
              path: "$user",
              preserveNullAndEmptyArrays: true,
            },
          },
        ])
        .toArray();
    }
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
