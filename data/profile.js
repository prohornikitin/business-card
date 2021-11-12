const db = require('./db')


async function get() {
    const conn = await db.connect()
    try {
        const [rows, fields]= await conn.query('SELECT data FROM Singleton WHERE id = "profile"')
        return JSON.parse(rows[0].data)
    } finally {
        conn.release()
    }
}

async function update(data) {
    const conn = await db.connect()
    try {
        await conn.query(
            `UPDATE Singleton SET data = ? WHERE id="profile"`,
            [ JSON.stringify(Object.assign({}, await get(), data)) ]
        )
    } finally {
        conn.release()
    }
}


module.exports = {
    get,
    update
}