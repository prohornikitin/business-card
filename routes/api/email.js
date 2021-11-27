const router = require('express').Router()
const storage = require('../../data/email')
const { body, validationResult, oneOf } = require('express-validator')
const auth = require('../../logic/auth')
const validators = require('../../logic/validators')
const { deleteFalsy } = require('../../logic/deleteFalsy')


router.patch(
    '/',
    ...validators.authData('authData'),
    oneOf([
        body('data.email').exists({checkFalsy: true}).isEmail(),
        body('data.username').exists({checkFalsy: true}).isString(),
        body('data.password').exists({checkFalsy: true}).isString(),
        body('data.host').exists({checkFalsy: true}).isURL(),
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