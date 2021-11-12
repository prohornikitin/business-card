class MyErrorWithCause extends Error {
    constructor(msg, cause=undefined, ...params) {
        super(msg, cause, ...params)
        this.cause = cause
        this.name = this.constructor.name
    }
}

class AuthError extends MyErrorWithCause {
    constructor(...params) {
        super(...params)
        this.name = this.constructor.name
    }
}

function errorHandler(res) {
    return (err) => {
        if(err instanceof AuthError) {
            res.sendStatus(403)
        } else {
            console.log(err)
            res.sendStatus(500)
        }
    }
}


module.exports = {
    errorHandler,
    AuthError
}


