const express = require('express'); 
const router = require("./src/server")
let app =  express()
app.use(router)



app.listen(3000,()=> console.log("listening"))