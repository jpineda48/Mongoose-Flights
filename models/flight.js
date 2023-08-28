const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema ({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: {type: Number, min: 0},
    flight: [{
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    }]
   
})



const destinationSchema = new Schema({
    airport: String,
    arrival: String
})
    

const flightSchema = new Schema ({
    airline: {type:String,
           required: true},
    airport: { type:String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX']
      },
    flightNo: {type: Number},
    departs: {type: String},
    destination: [destinationSchema],
    tickets:[ticketSchema]
})
       
    
    
    



module.exports = mongoose.model('Flight', flightSchema)
