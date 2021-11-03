const db = require('./db')

async function getCollection() {
    const connection = await db.connect()
    return connection.collection('single')
}

module.exports.get = async() => {
    const collection = await getCollection()
    return collection.findOne({type: 'profile'})
}

module.exports.update = async(newData) => {
    const collection = await getCollection()
    await collection.updateOne(
        {type: 'profile'}, 
        {$set: newData}
    )
}
