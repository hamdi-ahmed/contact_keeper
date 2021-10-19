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

// @route     POST api/contact
// @desc      Add new User Contacts
// @access    Private
router.post(
	'/',
	[auth, [check('name', 'Name is required').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		const { name, email, phone, type } = req.body
		try {
			const newContact = new Contact({
				name,
				email,
				phone,
				type,
				user: req.user.id,
			})
			const contact = await newContact.save()
			res.json(contact)
		} catch (err) {
			console.log(`Error: ${err.message}`)
			res.status(400).send('Server Error')
		}
	}
)

// @route     PUT api/contact/:id
// @desc      Update User Contacts
// @access    Private
router.put('/:id', auth, async (req, res) => {
	const { name, email, phone, type } = req.body
	const updatedContact = {}
	if (name) updatedContact.name = name
	if (email) updatedContact.email = email
	if (phone) updatedContact.phone = phone
	if (type) updatedContact.type = type
	try {
		let contact = await Contact.findById(req.params.id)
		if (!contact) return res.status(404).json({ msg: 'Contact is not found' })
		if (contact.user.toString() !== req.user.id) {
			return res.status(404).json({ msg: 'Not Authorized' })
		}
		contact = await Contact.findByIdAndUpdate(
			req.params.id,
			{ $set: updatedContact },
			{ new: true }
		)
		res.json(contact)
	} catch (err) {
		console.log(`Error: ${err.message}`)
		res.status(400).send('Server Error')
	}
})

// @route     DELETE api/contact/:id
// @desc      delete User Contacts by id
// @access    Private
router.delete('/:id', auth, async (req, res) => {
	try {
		let contact = await Contact.findByIdAndDelete(req.params.id)
		if (!contact) return res.status(404).json({ msg: 'Contact is not found' })
		if (contact.user.toString() !== req.user.id) {
			return res.status(404).json({ msg: 'Not Authorized' })
		}
		await Contact.findByIdAndRemove(req.params.id)
		res.json({ msg: 'Contact is deleted' })
	} catch (err) {
		console.log(`Error: ${err.message}`)
		res.status(400).send('Server Error')
	}
})

module.exports = router
