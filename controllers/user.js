const User = require('../models/User')

const Recipe = require('../models/Recipe')

module.exports = {
	create: (req, res) => {
		var signupStrategy = passport.authenticate('local-signup', {
			succussRedirect: '/',
			failurRedirect: '/signup',
			failureFlash: true
		})
		return signupStrategy(req, res)
	},
	signup: (req, res) => {
		res.render('user/signup')
	},
	login: (req, res) => {
		res.render('user/login')
	},
	createLogin: (req, res) => {
		// take input & compare to database

		// if no match - return to login page w/ flash message

		// if match - return to homepage
	}
}