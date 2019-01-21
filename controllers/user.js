const User = require('../models/User')

const Recipe = require('../models/Recipe')

module.exports = {
	create: (req, res) => {
		User.create({
				username: req.body.user.username,
				email: req.body.user.email,
				password: req.body.user.password,
		})},
	show: (req, res) => {
		User.findOne({_id: req.params.id})
		.populate({
			path: "recipes", 
			options: {
				limit: 7,
				sort: {createdAt: -1}
			}
		})
		.then(user => {
			res.render("user/show", {user})
		})
	}
}