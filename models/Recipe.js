const mongoose = require("../db/connection")
cost Schema = mongoose.Schema

const Recipe = new Schema({
	title: String,
	description: String,
	ingredients: Array,
	instructions: Array,
	createdAt: {
		type: Date,
		default: Date.now()
	}
})

module.exports = mongoose.model("Recipe", Recipe)