const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const morgan = require('morgan')

const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.end("hello world this is home");
});

//user signup
app.post('/user', (req,res)=>{
   console.log(req.body.username);
   res.send('hello');
});

app.listen(port, ()=>{
    console.log(`server at ${port}`);
});
