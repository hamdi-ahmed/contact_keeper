// Modules
const express = require('express')
const router = express.Router()
// Middleware
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

// Models
const User = require('../models/userModel')
const Contact = require('../models/contactModel')

// @route     GET api/contact
// @desc      Get User Contacts
// @access    Private
router.get('/', auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({
			date: -1,
		})
		res.json(contacts)
	} catch (err) {
		console.log(`Error: ${err.message}`)
		res.status(500).send('Server Error')
	}
})

module.exports = router
