const express = require('express')
const router = express.Router()

router.post('/signup',(req,res) => {
    console.log("POST");
    console.log(req.body.username)
    console.log(req.body.password)
});


module.exports = router