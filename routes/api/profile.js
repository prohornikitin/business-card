const router = require('express').Router()
const storage = require('../../data/profile')
const auth = require('../../logic/auth')
const { errorHandler } = require('../../logic/errors')
const { body, validationResult, oneOf } = require('express-validator')
const validators = require('../../logic/validators')
const deleteFalsy = require('../../logic/deleteFalsy')


router.get(
    '/', 
    (req, res) => {
        storage.get()
        .then(data => res.json(data))
        .catch(errorHandler(res))
    }
)


router.patch('/',
    ...validators.authData('authData'),
    oneOf([
        body('data.name').exists({checkFalsy: true}).isString().escape(),
        body('data.job').exists({checkFalsy: true}).isString().escape(),
        body('data.about').exists({checkFalsy: true}).isString().escape(),
        body('data.photo').isString(),
    ]),
    (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            console.warn(errors.array())
            return res.status(422).json(errors.array())
        }

        const authData = req.body.authData
        const data = req.body.data
        auth(authData)
        .then(() => storage.update(deleteFalsy(data)))
        .then(() => res.sendStatus(200))
        .catch(errorHandler(res))
    }
)


module.exports = router