// modules
const jsonwebtoken = require('jsonwebtoken')

const generateToken = (id) => {
	return jsonwebtoken.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '6d',
	})
}

module.exports = generateToken
