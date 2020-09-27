const router = require('express').Router();
const { send } = require('./../controllers/bookingCtrl');

router.post('/', send);

module.exports = router;