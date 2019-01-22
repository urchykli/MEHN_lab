const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"))
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }))

app.use(require("./routes/index.js"));

app.listen(3000, () => console.log("server is running away... catch"));