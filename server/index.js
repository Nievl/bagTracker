const express = require("express");
const { port, pathWeb, db_name } = require("../config");
const router = require("./router/router");
const logger = require("morgan");
const connectDB = require("./db/db");
const checkColl = require("./db/checkColl");

const app = express();

app.use(express.static(pathWeb));
app.use(logger("dev"));

connectDB()
  .then(db => {
    console.log("DB connect. DB name:", db_name);
    checkColl(db);
    app.locals.db = db;
    app.listen(port, () => console.log("server start at: " + port));
  })
  .catch(err => console.log("Error connect DB", err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);
