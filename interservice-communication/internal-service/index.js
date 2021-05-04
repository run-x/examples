const express = require("express");
const app = express();
const port = 3000;

app.get("/data", (req, res) => {
  res.send({
    source: "internal-service",
  });
});

app.get("/healthcheck", (req, res) => {
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
