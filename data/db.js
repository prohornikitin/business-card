const config = require('./config/db.json')
const mysql2 = require('mysql2/promise')

let db = undefined

module.exports.connect = async() => {
    if(!db) {
        db = mysql2.createPool({...config, connectionLimit: 5})
    }
    return db.getConnection()
}