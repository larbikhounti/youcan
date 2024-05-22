const express = require('express'); 
let app =  express()

app.get('/', function (req, res) {
    res.send('Hello World')
  })


  app.post('/webhook', function (req, res) {
    res.send(req.params)
  })  
  
  app.listen(3000,()=> console.log("listening"))

  