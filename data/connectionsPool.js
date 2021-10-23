mariadb = require('mariadb')
config = require('./config/db.json')


let pool = undefined

module.exports.getConnection = () => {
    if(!pool) {
        console.log("Connecting to DB...");
        init()
        console.log("Connected!");
    }
    return pool.getConnection()
}


function init() {
    pool = mariadb.createPool({...config, connectionLimit: 5});
    
    process.on("exit", function() {
        pool.end()
    });
}




