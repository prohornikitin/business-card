const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017'
const dbName = 'siteCard'


let db = undefined

async function connectToDb() {
    const client = new MongoClient(url)
    const connection = await client.connect()
    process.on("exit", connection.close)
    return client.db(dbName)
}

module.exports.connect = async() => {
    if(!db) {
        db = await connectToDb()
    }
    return db   
}