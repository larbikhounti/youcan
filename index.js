const express = require('express'); 
const router = require("./api/server")
let app =  express()
app.use(router)



app.listen(3000,()=> console.log("listening"))

module.exports = app;