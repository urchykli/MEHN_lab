const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Recipe = new Schema({
	title: String,
	description: String,
	ingredients: [String],
	instructions: [String],
	createdAt: {
		type: Date,
		default: Date.now()
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	}
})

module.exports = mongoose.model("Recipe", Recipe)