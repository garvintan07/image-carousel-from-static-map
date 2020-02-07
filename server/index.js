const express = require("express");
const getTheData = require("../database/index.js");
const path = require("path");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
const port = 3004;
app.use(express.static(path.join(__dirname, "../client/dist/")));

app.get("/images", (req, res) =>
  getTheData((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
