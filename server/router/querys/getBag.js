function getBag(req, res, next) {
  const collection = req.app.locals.db.collection("bags");
  collection.find({}).toArray((err, bags) => {
    if (err) return console.log(err);
    res.json(bags);
  });
}

module.exports = getBag;
