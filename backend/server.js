const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/bansos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.log);

const routes = ["recipient", "assistance", "officer", "report", "region"];
routes.forEach((route) =>
  app.use(`/api/${route}`, require(`./routes/${route}`))
);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
