const User = require('../models/User')
const Recipe = require('../models/Recipe')
const passport = require('passport')

module.exports = {
	createSignup: (req, res, next) => {
		var signupStrategy = passport.authenticate('local-signup', {
			succussRedirect: '/user/signup',
			failurRedirect: '/user/signup',
			failureFlash: true
		})
		return signupStrategy(req, res, next)
	},
	signup: (req, res) => {
		res.render('user/signup', {message: req.flash('signupMessage')})
	},
	login: (req, res) => {
		res.render('user/login', {message: req.flash('loginMessage')})
	},
	createLogin: (req, res, next) => {
		var loginProperty = passport.authenticate('local-login', {
			succussRedirect: '/login',
			failurRedirect: '/login',
			failureFlash: true
		})
		return loginProperty(req, res, next)
	}
}