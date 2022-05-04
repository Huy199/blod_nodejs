const path = require("path");
const express = require("express");
// log request
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));
// HTTP logger
app.use(morgan("combined"));
app.use(express.urlencoded());
app.use(express.json());
// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    }
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
//Route init 1


route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
