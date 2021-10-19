// Modules
const express = require('express')

const router = express.Router()

// EndPoints
router.get('/', (req, res) => {
	res.send('User Route..')
})

module.exports = router
