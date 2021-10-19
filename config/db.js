// modules
const mongoose = require('mongoose')

const dbConnect = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
		})
		console.log(`Connected !!`)
	} catch (err) {
		console.error(`Error: ${err}`)
		process.exit(1)
	}
}

module.exports = dbConnect
