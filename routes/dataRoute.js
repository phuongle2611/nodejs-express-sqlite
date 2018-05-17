var express = require('express')
var router = express.Router()

// Require controller modules.
var data_controller = require('../controllers/dataController')

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

router.get('/getcurrentdatapertidstring_v2',data_controller.get_current_data_string);

router.get('/getcurrentdatapertidwithlimit_live',data_controller.get_current_data_per_tid_with_limit_live);

router.get('/get_raw_data_last_60_test',data_controller.get_raw_data_last_60_test);

module.exports = router