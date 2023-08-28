const express = require('express');
const router = express.Router();
const destCtrl = require('../controllers/destinations')

/* GET users listing. */
// router.post('flights/:id/destinations', destCtrl.create)

router.post('/flights/:id/destination', destCtrl.create)

module.exports = router;
