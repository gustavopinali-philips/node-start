const express = require("express")
const authController = require("./authController")

function init() {
	let routes = express.Router()

	routes.route('/')
		.get(authController.get)
		.post(authController.post)

	routes.route('/forgot-password')
		.post(authController.forgotPassword)

	routes.route('/reset-password/:token')
		.patch(authController.resetPassword)

	return routes
}

module.exports = { init }
