const db = require('./db')

async function getCollection() {
    const connection = await db.connect()
    return connection.collection('single')
}

module.exports.get = async() => {
    const collection = await getCollection()
    return collection.findOne({type: 'authData'})
}

module.exports.update = async(data) => {
    const collection = await getCollection()
    await collection.updateOne({type: 'authData'}, {$set: data})
}