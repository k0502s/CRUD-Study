const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.tutorials = require("../models/DB")(mongoose);

module.exports = db;