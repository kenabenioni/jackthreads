const express = require("express"),
  bodyParser = require("body-parser"),
  ctrl = require("./controller.js"),
  massive = require("massive");

  const app = express();
  const PORT = 3003;

  app.use(bodyParser.json());

  app.listen(PORT, () => console.log(`${PORT} is the port.`));