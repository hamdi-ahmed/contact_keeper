// Modules
const express = require('express')
const dbConnect = require('./config/db')

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

// Setup the port and Run the server
const port = process.env.PORT || 8000
app.listen(port, console.log(`App is running on port ${process.env.PORT}`))
