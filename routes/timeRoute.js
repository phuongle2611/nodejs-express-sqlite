var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');
// Require controller modules.
var time_controller = require('../controllers/timeController')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  // console.log('Time: ', Date.now())
  // console.log(process.memoryUsage());
  next()
})

// define the home page route
// router.get('/', data_controller.index);

// define the about route
// router.get('/about', data_controller.about);
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));
router.post('/',time_controller.post_time);

module.exports = router