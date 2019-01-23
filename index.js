const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const methodOverride = require('method-override')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

const app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "hbs");

app.use(methodOverride("_method"))

app.use(require("./routes/index.js"));
app.use(session({secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS'}))
app.use(flash())

// require('./config/passport')(passport)
// app.use(passport.initialize())
// app.use(passport.session())

app.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next()
})




app.listen(3000, () => console.log("server is running away... catch"));