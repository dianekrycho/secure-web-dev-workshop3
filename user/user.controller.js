// This file is used to map API calls (Presentation Layer) with the
// Business-Logic layer

const router = require('express').Router()
const userService = require('./user.service')

router.get('/user', (req, res) => {
    return res.status(200).send({User})
})


module.exports = router
