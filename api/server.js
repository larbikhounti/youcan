
const express  = require('express'); 
const router = express.Router()

router.get('/', function (req, res) {
    res.send('Hello World')
  })


router.post('/webhook', function (req, res) {
    res.send(req.params)
})  
  
module.exports = router;

  