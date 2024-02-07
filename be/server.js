const express = require("express");
const cors = require("cors");
const { baseRouter } = require("./routes/index.route");

const port = process.env.PORT || 1667;
const app = express();

app.use(cors());
app.use("/api", baseRouter);

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
