const express = require("express");

const app = express();
const port = process.env.PORT || 1667;

app.get("/", (req, res) => {
  res.json({
    success: "true",
  });
});

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
