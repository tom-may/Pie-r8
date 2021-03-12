const express = require('express')
const db = require('../db/reviews')
const router = express.Router()

router.get('/', (req,res) => {
    db.getReviews()
    .then(reviews => {
        res.json(reviews)
    })
    .catch(err => {
        console.log("Error", err)
        res.status(500).json({message: "Something went worng"})
    })
})

router.get('/:id', (req,res) => {
    const reviewId = req.params.id
    db.getReview(reviewId)
    .then(review => {
        res.json(review)
    })
    .catch(err => {
        console.log("Error", err)
        res.status(500).json({message: "Something went worng"})
    })
})

router.post('/', (req,res) => {
    db.addReview(review)
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        console.log("Error", err)
        res.status(500).json({message: "Something went worng"})
    })
})

router.delete('/:id', (req,res) => {
    const reviewId = req.params.id
    db.deleteReview(reviewId)
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        console.log("Error", err)
        res.status(500).json({message: "Something went worng"})
    })
})