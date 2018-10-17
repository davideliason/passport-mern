const express = require('express');


const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req,res) => {
    res.end("hello world");
});

app.post('/auth/signup',(req,res) => {
    console.log("POST");
    res.end('POST from form received');
});

app.listen(port, ()=>{
    console.log(`listening at port ${port}`);
});