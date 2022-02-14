import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import Data from "./Data.js";
// const Data = require("./Data");
const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: Data.password,
  database: Data.database,
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!!");
});
db.query(`SELECT * FROM product_tbl`, (rows, error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(rows);
  }
});

app.listen(8089, () => {
  console.log("Listening on port");
});
