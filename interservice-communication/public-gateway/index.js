const express = require("express");
const app = express();
const port = 3000;
const request = require("axios");

app.get("/", (req, res) => {
  request
    .get("http://app.examples-internal-service/data")
    .then(({ data }) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.get("/healthcheck", (req, res) => {
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
