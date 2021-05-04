const express = require("express");
const app = express();
const port = 3000;

const pool = new Pool();
app.get("/data", (req, res) => {
  pool.query("SELECT NOW()", (err, dbRes) => {
    if (err) {
      return res.code(500).json(err);
    }
    pool.end();
    return res.json({
      dbTime: dbRes,
    });
  });
});

app.get("/healthcheck", (req, res) => {
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
