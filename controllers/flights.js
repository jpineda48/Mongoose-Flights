const Flight = require('../models/flight')
const mongoose = require('mongoose');

////FUNCTIONS


///INDEX

function index(req, res) {
    ///use find method to display data
    Flight.find({})
        .then(flightDocs => {
            console.log ('found these flights ', flightDocs )
            res.render('index', { flights: flightDocs, title: 'Welcome to Your Flights'})
            })
            .catch(err => {
                console.log('====errr====')
                console.log(err)
                return res.send('err creating - check terminal')
            })
}

///NEW
function newFlight(req, res){
    
    res.render('flights/new',{ title: 'ENTER A NEW FLIGHT'})
}
//CREATE
function create(req, res) {
    console.log('this is req', req.body)
    Flight.create(req.body)
        .then(flightDoc => {
            console.log('this is the movie returned from db', flightDoc)
            // return res.send(`flight created ${flightDoc.airline}`)
            res.redirect('/')
        })
        .catch(err => {
            console.log('====errr====')
            console.log(err)
            return res.send('err creating - check terminal')
        })
    }
//SHOW

function show(req, res) {

    ///use find by ID method
    Flight.findById(req.params.id)
        .then(flightDoc => {
            console.log(`this is the flight in show ${flightDoc}`)
            console.log(`this is the desination in show ${flightDoc.destination}`)

            // res.send (`found the flight: ${flightDoc.airline}`))
            res.render('flights/show', {flight:flightDoc, title: 'FLIGHT INFO'})
        })
        .catch(err => {
            console.log('====errr====')
            console.log(err)
            return res.send('err creating - check terminal')
        })
}

//EDIT

///lIST DESITATIONS

//DELETE

module.exports= {
    index,
    create,
    new: newFlight,
    show,

}