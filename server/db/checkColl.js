const collName = ["bags", "users"];

async function checkColl(db) {
  const collections = await db.collections();
  const collNames = collections.map(c => c.collectionName);
  collName.forEach(async name => {
    if (!collNames.includes(name)) {
      console.log("error: ", name, " collections is not defines");
      await db.createCollection(name);
      console.log("info: ", name, " collections is created");
    }
  });
}

module.exports = checkColl;
