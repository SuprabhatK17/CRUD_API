const mongoose = require('mongoose')

// structure (attributes)
const brokerSchema = new mongoose.Schema({

    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true

    }

});

module.exports = mongoose.model('Broker',brokerSchema)