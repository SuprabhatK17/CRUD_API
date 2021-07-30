const express = require('express');
const router = express.Router(); // create a new Router (path) object to handel the request

const createBroker = require('../controller/broker')
const viewBroker = require('../controller/broker')
const updateBroker = require('../controller/broker')
const deleteBroker = require('../controller/broker')


router.use(express.json())
router.post('/createBroker',createBroker.createBroker)
router.get('/:id',viewBroker.viewBroker)
router.patch('/update/:id',updateBroker.updateBroker)
router.delete('/delete/:id',deleteBroker.deleteBroker)

module.exports = router;

//~~~~~~~~~~~~~~ trash code ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// router.get('/',async function(req,res){
    

//     try{

//         const brokers = await CreateBrokerSchema.find()
//         res.json(brokers)


//     }catch(err){
//         res.send(err);
//     }
// });

// router.get('/:id',async function(req,res){   

//     try{

//         const brokers = await CreateBrokerSchema.findById(req.params.id)
//         res.json(brokers)


//     }catch(err){
//         res.send(err);
//     }
// });


// router.post('/',async function(req,res){
   
//     const broker = new BrokerSchema({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         contactNo: req.body.contactNo

//     })

//     try{

//         const brokerData = await broker.save()
//         res.json(brokerData)

//     }catch(err){
//         res.send(err)
//     }

    
// });

// router.patch('/:id',async function(req,res){
    
//     try{

//         const brokers = await CreateBrokerSchema.findById(req.params.id)
//         brokers.firstName = req.body.firstName
//         brokers.lastName = req.body.lastName
//         brokers.contactNo = req.body.contactNo
//         const brokersData = await brokers.save()
//         res.json(brokersData)


//     }catch(err){
//         res.send(err);
//     }
// });

// router.delete('/:id',async function(req,res){
    
//     try{

//         const brokers = await CreateBrokerSchema.findById(req.params.id)
//         brokers.firstName = req.body.firstName
//         brokers.lastName = req.body.lastName
//         brokers.contactNo = req.body.contactNo
//         const brokersData = await brokers.remove()
//         res.json(brokersData)


//     }catch(err){
//         res.send(err);
//     }
// });





