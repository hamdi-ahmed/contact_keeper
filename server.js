// Modules
const express = require('express')
const dbConnect = require('./config/db')
const path = require('path')

require('dotenv').config()
const app = express()

// DB Connection
dbConnect()

// Middleware
app.use(express.json({ extended: false }))

// Routes
app.use('/api/auth', require('./routes/authRoute'))
app.use('/api/user', require('./routes/userRoute'))
app.use('/api/contact', require('./routes/contactRoute'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'))

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	)
}

// Setup the port and Run the server
const port = process.env.PORT || 8000
app.listen(port, console.log(`App is running on port ${process.env.PORT}`))
