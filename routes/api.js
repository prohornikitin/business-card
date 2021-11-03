const express = require('express')
const router = express.Router()
const portfolioStorage = require('../data/portfolio')
const profileStorage = require('../data/profile')
const authDataStorage = require('../data/authData')
const auth = require('../logic/auth')
const { errorHandler } = require('../logic/errors')


router.get('/profile', (req, res) => {
    profileStorage.get()
    .then(data => res.json(data))
    .catch(errorHandler(res))
})


router.put('/profile', (req, res) => {
    const authData = req.body.authData
    const data = req.body.data
    auth(authData)
    .then(() => {return profileStorage.update(data)})
    .then(() => res.sendStatus(200))
    .catch(errorHandler(res))
})


router.get('/portfolio', (req, res) => {
    portfolioStorage.getAll()
    .then(data => res.json(data))
    .catch(errorHandler(res))
})

router.put('/portfolio', (req, res) => {
    const authData = req.body.authData
    const data = req.body.data
    const id = req.body.data.id

    auth(authData)
    .then(() => {
        if(id) {
            return portfolioStorage.updateExisting(id, data)
        } else {
            return portfolioStorage.putNew(data)
        }
    })
    .then(() => res.sendStatus(200))
    .catch(errorHandler(res))
})


router.put('/changePassword', (req, res) => {
    const authData = req.body.authData
    const data = req.body.data

    auth(authData)
    .then(() => authDataStorage.update(data))
    .then(() => res.sendStatus(200))
    .catch(errorHandler(res))
})


module.exports = router
