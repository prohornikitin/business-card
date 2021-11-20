const db = require('./db')

module.exports.get = async() => {
    const conn = await db.connect()
    try {
        const [rows, fields] = await conn.query('SELECT * FROM Singleton WHERE id="authData"')
        return JSON.parse(rows[0].data)
    } finally {
        conn.release()
    }
}

module.exports.update = async(data) => {
    const conn = await db.connect()
    try {
        await conn.query(`UPDATE Singleton 
            SET data = ? 
            WHERE id = 'authData'`,
            [JSON.stringify(data)]
        )
    } finally {
        conn.release()
    }
}