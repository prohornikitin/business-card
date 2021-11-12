const router = require('express').Router()
const storage = require('../../data/portfolio')
const auth = require('../../logic/auth')
const { errorHandler } = require('../../logic/errors')
const { body, validationResult, oneOf } = require('express-validator')
const validators = require('../../logic/validators')


router.get(
    '/',
    (req, res) => {
        storage.getAll()
        .then(data => res.json(data))
        .catch(errorHandler(res))
    }
)


router.put(
    '/',
    ...validators.authData('authData'),
    body('data.title').isString().escape(),
    body('data.image').isString(),
    body('data.technologies').isArray(),
    body('data.description').isString().escape(),
    body('data.link').exists().isURL(),
    (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            console.warn(errors.array())
            return res.status(422).json(errors.array())
        }
        
        const authData = req.body.authData
        const data = req.body.data
        auth(authData)
        .then(() => storage.putNew(data))
        .then(() => res.sendStatus(200))
        .catch(errorHandler(res))
    }
)

router.patch(
    '/',
    ...validators.authData('authData'),
    body('data.id').isInt(),
    oneOf([
        body('data.title').isString().escape(),
        body('data.image').isString(),
        body('data.technologies').isArray(),
        body('data.description').isString().escape(),
        body('data.link').isURL()
    ]),
    (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            console.warn(errors.array())
            return res.status(422).json(errors.array())
        }

        const authData = req.body.authData
        let data = req.body.data
        const id = req.body.data.id
        if(data.technologies) {
            data.technologies = data.technologies.split(' ')
        }

        auth(authData)
        .then(() => {
            return storage.updateExisting(id, data)
        })
        .then(() => res.sendStatus(200))
        .catch(errorHandler(res))
    }
)


module.exports = router