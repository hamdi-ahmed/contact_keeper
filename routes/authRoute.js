// Modules
const express = require('express')

const router = express.Router()

// EndPoints
router.get('/', (req, res) => {
	res.send('Auth Route..')
})

module.exports = router