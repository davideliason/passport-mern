const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req,res) => {
    res.end("hello world this is home");
});

app.post('/user', (req,res)=>{
    res.send("okay got your request");
});

app.listen(port, ()=>{
    console.log(`server at ${port}`);
});
