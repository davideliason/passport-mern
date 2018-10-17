if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3001;

// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.end("hello world");
});

// ROUTES
app.post('/auth/signup',(req,res) => {
    console.log("POST");
    console.log(req.body.username)
    console.log(req.body.password)
    res.data = "hhe";

});

app.listen(port, ()=>{
    console.log(`listening at port ${port}`);
});