const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets')
const Flight = require('../models/flight')

////shows ticket page
router.get('/flights/:id/tickets', function(req, res, next) {
    res.render('tickets/new', { title: 'Express', flights: Flight })
})

module.exports = router;
