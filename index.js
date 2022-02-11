import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "asystresources",
  database: "vente",
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(8089, () => {
  console.log("Listening on port");
});
