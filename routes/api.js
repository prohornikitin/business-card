const express = require('express')
const router = express.Router()
const portfolioStorage = require('../data/portfolio')
const profileStorage = require('../data/profile')
const authDataStorage = require('../data/authData')
const auth = require('../logic/auth')
const { errorHandler } = require('../logic/errors')
const fs = require('fs')
const path = require('path')




router.post('/checkAuth', (req, res) => {
    auth(req.body.authData)
    .then(() => res.sendStatus(200))
    .catch(errorHandler(res))
})


router.put('/upload', (req, res) => {
    const file = req.files.file
    const realNewPath = './client/public/images/uploaded/' + file.name
    const newAccessPath = 'images/uploaded/' + file.name;
    auth(req.body)
    .then(() => fs.promises.copyFile(file.path, realNewPath))
    .then(() => res.json(newAccessPath))
    .catch(errorHandler(res))
    
})


router.get('/profile', (req, res) => {
    profileStorage.get()
    .then(data => res.json(data))
    .catch(errorHandler(res))
})


router.put('/profile', (req, res) => {
    const authData = req.body.authData
    const data = req.body.data
    auth(authData)
    .then(() => {
        for (const key in data) {
            if (!data[key]) {
                delete data[key]
            }
        }
        return profileStorage.update(data)
    })
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
    let data = req.body.data
    const id = req.body.data.id
    if(data.technologies) {
        data.technologies = data.technologies.split(' ')
    }


    auth(authData)
    .then(() => {
        if(id) {
            for (const key in data) {
                if (!data[key]) {
                    data[key] = undefined
                }
            }
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
