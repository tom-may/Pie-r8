const express = require('express')
const db = require('../db/users')
const router = express.Router()

router.post('/', (req, res) => {
    const user = req.body
    db.addUsers(user)
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
    const user = req.body
    db.updateUser(
        id, 
        user.first_name, 
        user.last_name, 
        user.email,
        user.location
        )
        .then(user => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log("Error", err)
            res.status(500).json({message: "Something went worng"})
        })
})


module.exports = router