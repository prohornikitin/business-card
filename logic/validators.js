const { check, buildCheckFunction } = require('express-validator');

function authData(root = undefined) {
    if(root) {
        root += '.'
    }
    return [
        check(`${root}login`).exists({checkFalsy: true}).isString(),
        check(`${root}password`).exists({checkFalsy: true}).isString(),
    ]
}


module.exports = {
    authData
}