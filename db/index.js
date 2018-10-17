
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let MLAB
let MONGO_URL
const MONGO_LOCAL_URL = 'mongodb://localhost/mern-passport'

if (process.env.MLAB) {
	mongoose.connect(process.env.MLAB)
	MLAB = process.env.MLAB
} else {
	mongoose.connect(MONGO_LOCAL_URL) // local mongo url
	MONGO_URL = MONGO_LOCAL_URL
}

const db = mongoose.connection
db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
	console.log(
		`You have successfully connected to your mongo database`
	)
})

module.exports = db
