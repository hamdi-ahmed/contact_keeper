// Modules
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')

// Model
const User = require('../models/userModel')
const generateToken = require('../util/token')

// @route     POST api/user
// @desc      Register a user
// @access    Public
router.post(
	'/',
	[
		check('name', 'Please, add name').not().isEmpty(),
		check('email', 'Please, add a valid email').isEmail(),
		check(
			'password',
			'Please, enter your password with 6 or more characters'
		).isLength({
			min: 6,
		}),
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		const { name, email, password } = req.body
		try {
			const userExist = await User.findOne({ email })
			if (userExist) {
				return res.status(400).json({ msg: 'User is already exist' })
			}
			let user = await User.create({
				name,
				email,
				password,
			})

			const salt = await bcrypt.genSalt(10)
			user.password = await bcrypt.hash(password, salt)
			res.status(201).json({
				_id: user._id,
				name: user.name,
				email: user.email,
				token: generateToken(user._id),
			})
			await user.save()
		} catch (err) {
			console.error(`Error: ${err.message}`)
			return res.status(500).send('Server Error')
		}
	}
)

module.exports = router
