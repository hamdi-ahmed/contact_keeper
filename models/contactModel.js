// modules
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const contactSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: {
		type: String,
	},
	type: {
		type: String,
		default: 'Personal',
	},
	date: {
		type: Date,
		default: Date.now,
	},
})

const User = mongoose.model('Contacts', contactSchema)
module.exports = User
