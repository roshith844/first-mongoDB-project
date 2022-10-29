const express = require("express");
// init app and middleware 
const app = express()
app.listen(3000, ()=>{
     console.log('running sever')
})
// routes
app.get('/books', (req,res)=>{
     
})
