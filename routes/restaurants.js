var express = require('express');
var router = express.Router();
var controll = require("../controllers/restaurantController")

/* GET home page. */
router.get('/', controll.getAll)
router.post('/',controll.insert)
router.get('/:id', controll.findById)
router.patch('/:id', controll.update)
router.delete('/:id', controll.delete)

module.exports = router;
