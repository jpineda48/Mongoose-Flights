const Flight = require('../models/flight')
const mongoose = require('mongoose');

function create(req, res) {
    ///need to find the flight
    Flight.findById(req.params.id)
    .then( flightDoc => {
        ///push new dest into dest array
        flightDoc.destination.push(req.body)
        console.log('this is the info', flightDoc.destination)
        //save movie
        return flightDoc.save()
    })
    .then(flight => {
        res.redirect(`/flights/${flight._id}`)
    })
    ///push the new destination into the destination array
    ///save the destination and redirect user
    //redirect is what refreshes page with new content
        .catch(err => {
            console.log('====errr====')
            console.log(err)
            return res.send('err creating - check terminal')
        })


}
        

module.exports = {
    create

}