const express = require('express');
const router = express.Router();
const Model = require('../models/model')

//create
router.post('/', async (req,res) =>{
    const modelPost = new Model({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    })

    try {
        const model = await modelPost.save()
        res.json(model)
    }catch(err){
        res.json({message:err})
    }
})


//get

router.get('/', async (req,res) =>{
    try {
        const model = await Model.find()
        res.json(model)
    }catch(err){
        res.json({message:err})
    }
})

//update

router.put('/:modelId', async (req,res) =>{
    try {
        const modelUpdate = await Model.updateOne({_id: req.params.modelId},
            {name: req.body.name,
             email: req.body.email,
             phone: req.body.phone,
             address: req.body.address,
            })
        res.json("Updated!")
    }catch(err){
        res.json({message:err})
    }
})

//delete

router.delete('/:modelId', async (req,res) =>{
    try {
        const modelDelete = await Model.deleteOne({_id: req.params.modelId})
        res.json("Deleted!")
    }catch(err){
        res.json({message:err})
    }
})



module.exports = router ;