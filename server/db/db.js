const { db_address, db_name, db_user, db_pass } = require("../../config");

const url = `postgres://${db_user}:${db_pass}@${db_address}/${db_name}`;
