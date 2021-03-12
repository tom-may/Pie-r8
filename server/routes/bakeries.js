const express = require('express')
const db = require('../db/bakeries')
const router = express.Router()

router.get('/', (req,res) => {
    db.getBakeries()
        .then(bakeries => {
            res.json(bakeries)
        })
        .catch(err => {
            console.log("Error", err)
            res.status(500).json({message: "Something went worng"})
        })
})

router.get('/:id', (req,res) => {
    const bakeryId = req.params.id
    db.getBakeryById(bakeryId)
    .then(bakery => {
        res.json(bakery)
    })
    .catch(err => {
        console.log("Error", err)
        res.status(500).json({message: "Something went worng"})
    })
})

router.post('/', (req,res) => {
    const bakery = req.body
    db.addBakery(bakery)
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        console.log("Error", err)
        res.status(500).json({message: "Something went worng"})
    })
})

router.patch('/:id', (req,res) => {
    const id = req.params.id
    const bakery = req.body
    db.updateBakery(id, bakery.name, bakery.address)
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        console.log("Error", err)
        res.status(500).json({message: "Something went worng"})
    })
})



router.delete('/:id', (req,res) => {
    const id = req.params.id
    db.deleteBakery(id)
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        console.log("Error", err)
        res.status(500).json({message: "Something went worng"})
    })
})

module.exports = router