const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req,res) => {
    res.end("hello world");
});

app.post('/auth/signup',(req,res) => {
    console.log("POST");
    console.log(req.body.username)
    console.log(req.body.password)

});

app.listen(port, ()=>{
    console.log(`listening at port ${port}`);
});