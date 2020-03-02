var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.get('/:id/edit', flightsCtrl.edit);
// router.get('/:id/delete', flightsCtrl.delete);
router.post('/', flightsCtrl.create);
router.put('/:id/update', flightsCtrl.updateFlight)




module.exports = router;
