const authDataStorage = require('../data/authData')
const { AuthError } = require('./errors')


async function auth(arg) {
    const real = await authDataStorage.get()
    if(
        real == null ||
        real.login !== arg.login ||
        real.password !== arg.password
    ) {
        throw new AuthError("Can't auth");
    }
}

module.exports = auth