// we need express
const express = require('express')
// we need to isolate the router
const router = express.Router()
const flightsCtr = require('../controllers/flights')

///INDEX show all
router.get('/', flightsCtr.index)


///NEW displays formt that triggers create
router.get('/new', flightsCtr.new)


router.post('/', flightsCtr.create)
///CREATE creates datat triggered by new form


///SHOWS each flight
router.get('/flights/:id', flightsCtr.show)

///ROUTE FOR ADDING A DESTINATION

///EDIT edit flight


///UPDATE update flight


//DELETE delete flight

module.exports = router;