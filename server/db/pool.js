const { MongoClient } = require("mongodb");

const { db_address, db_name } = require("../../config");

const uri = `mongodb://${db_address}`;

const db = new MongoClient(uri, { useUnifiedTopology: true });

function connectDB() {
  return new Promise((resolve, reject) =>
    db.connect((err, client) => {
      if (err) reject(err);
      const db = client.db(db_name);
      resolve(db);
    }),
  );
}

module.exports = connectDB;
