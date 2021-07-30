const Broker = require('../models/broker')
const mongoose = require('mongoose')


// function to create new broker
function createBroker(req,res,next){
    let firstName =  req.body.firstName; // req.body property contains key value pair
    let lastName =  req.body.lastName;
    let contactNo = req.body.contactNo;

    let createBrokerObj = new Broker({
        firstName,
        lastName,
        contactNo
    })
    createBrokerObj.save(function(err,result){
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send(result)
        }
    })
}


// function to read/view the save data
function viewBroker(req,res,next){
    Broker.findById(req.params.id,function(err,result){
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send(result)

        }
    })
}


// function to update data
function updateBroker(req,res,next){
    Broker.findByIdAndUpdate(req.params.id,req.body,function(err,result){
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
}

//function to delete data
function deleteBroker(req,res,next){
    Broker.findByIdAndDelete(req.params.id,function(err,result){
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
}

module.exports.createBroker = createBroker
module.exports.viewBroker = viewBroker
module.exports.updateBroker = updateBroker
module.exports.deleteBroker = deleteBroker