const express = require('express')
var admin = require('./routes/admin')

const app = express()
const port = 3000

app.use('/admin',admin);

app.listen(port,() =>{
    console.log("Express API running on port "+port)
})