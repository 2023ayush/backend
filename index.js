const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("appilation is Working");
});
app.listen(5000);
