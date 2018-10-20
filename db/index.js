
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let MLAB
let MONGO_URL

if (process.env.MLAB) {
	mongoose.connect(process.env.MLAB)
	MLAB = process.env.MLAB
} else {
	console.log("need internet connection");
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
