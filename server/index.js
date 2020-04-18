const express = require("express");
const { port, pathWeb } = require("../config");
const router = require("./router/router");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.use(express.static(pathWeb));

app.listen(port, () => console.log("server start at: " + port));
