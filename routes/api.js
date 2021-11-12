const router = require('express').Router()
const authDataStorage = require('../data/authData')
const auth = require('../logic/auth')
const { errorHandler } = require('../logic/errors')
const fs = require('fs')
const path = require('path')
const { body, validationResult } = require('express-validator')
const validators = require('../logic/validators')


router.use('/profile', require('./api/profile'))
router.use('/portfolio', require('./api/portfolio'))


router.put(
    '/upload',
    ...validators.authData(),
    (req, res) => {
        const file = req.files.file
        const realNewPath = './client/public/images/uploaded/' + file.name
        const newAccessPath = 'images/uploaded/' + file.name;
        auth(req.body)
        .then(() => fs.promises.copyFile(file.path, realNewPath))
        .then(() => res.json(newAccessPath))
        .catch(errorHandler(res))
    }
)


router.post(
    '/checkAuth', 
    ...validators.authData('authData'),
    (req, res) => {
        auth(req.body.authData)
        .then(() => res.sendStatus(200))
        .catch(errorHandler(res))
    }
)


router.put(
    '/changePassword', 
    ...validators.authData('authData'),
    ...validators.authData('data'),
    (req, res) => {
        const authData = req.body.authData
        const data = req.body.data

        auth(authData)
        .then(() => authDataStorage.update(data))
        .then(() => res.sendStatus(200))
        .catch(errorHandler(res))
    }
)


module.exports = router
