const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/corny");
mongoose.Promise = Promise;
module.exports = mongoose;
