// Modules
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')

// Models
const User = require('../models/userModel')
const generateToken = require('../util/token')

// @route     POST api/auth
// @desc      Login
// @access    Public
router.post(
	'/',
	[
		check('email', 'Please, enter a valid Email').isEmail(),
		check('password', 'Enter your password').exists(),
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		try {
			const { email, password } = req.body
			let user = await User.findOne({ email })
			if (user && (await user.matchPassword(password))) {
				res.json({
					_id: user._id,
					name: user.name,
					email: user.email,
					token: generateToken(user._id),
				})
			} else {
				return res.status(400).json({ msg: 'Invalid Email or Password' })
			}
		} catch (err) {
			console.log(`Error: ${err}`)
			return res.status(400).json({ msg: 'Server Error' })
		}
	}
)

module.exports = router
