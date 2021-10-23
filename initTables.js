const mariadb = require('mariadb')
const config = require('./data/config/db.json')

const db = mariadb.createPool({...config, connectionLimit: 5});

async function init() {
    const connection = await db.getConnection()
    try {
        await createTables(connection)
    } finally {
        connection.release()
    }
    process.exit()
}

async function createTables(connection) {
    await connection.query(
        `CREATE TABLE Portfolio (
            id INT NOT NULL AUTO_INCREMENT,
            image VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            technologies LONGTEXT NOT NULL,
            description LONGTEXT NOT NULL,
            PRIMARY KEY(Id)
        );`
    )
}

init()