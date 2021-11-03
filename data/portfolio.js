const db = require('./db')

async function getCollection() {
    const connection = await db.connect()
    return connection.collection('portfolio')
}

module.exports.getAll = async() => {
    const collection = await getCollection()
    return collection.find({}).toArray()
}

module.exports.putNew = async(data) => {
    const collection = await getCollection()
    const maxId = await collection.aggregate({
        $group: { maxQuantity: {$max: "$id"} }
    })
    await collection.insertOne({ ...data, id: maxId+1 })
}
    

module.exports.updateExisting = async(id, data) => {
    const collection = await getCollection()
    await collection.updateOne({'id': id}, {$set: data})
}
