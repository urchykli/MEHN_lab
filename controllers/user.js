const User = require('../models/User')

const Recipe = require('../models/Recipe')

module.exports = {
	create: (req, res) => {
		User.create({
				username: req.body.user.username,
				email: req.body.user.email,
				password: req.body.user.password,
		})
		.then(user => {
			res.redirect(`/`)
	})},
	signup: (req, res) => {
		res.render('user/signup')
	},
	login: (req, res) => {
		res.render('user/login')
	}
}