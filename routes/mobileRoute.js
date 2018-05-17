var express = require('express')
var router = express.Router()
var mobile_controller = require('../controllers/mobileController')
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  // console.log('Mobile Time: ', Date.now())
  next()
})

router.get('/:id',mobile_controller.index);

module.exports = router