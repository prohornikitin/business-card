const db = require('./connectionsPool')

module.exports.getAll = async() => {
    const connection = await db.getConnection()
    try {
        let entries = await connection.query('SELECT * FROM Portfolio ORDER BY id ASC')
        console.log(entries[0].technologies)
        entries.forEach(i => {i.technologies = JSON.parse(i.technologies)});
        console.log(entries[0].technologies)
        return entries;
    } finally {
        connection.release()
    }
}


module.exports.putNew = async(data)=>{
    const connection = await db.getConnection()
    try {
        await connection.query(
            'INSERT INTO Portfolio (image, title, technologies, description) VALUES (?,?,?,?)',
            [data.image, data.title, JSON.stringify(data.technologies), data.description]
        )
    } finally {
        connection.release()
    }
}

module.exports.updateExisting = async(id, data)=>{
    const connection = await db.getConnection()
    try {
        await connection.query(
            `UPDATE Portfolio 
                SET image = ?, 
                    title = ?,
                    technologies = ?,
                    description = ?
             WHERE id = ?`,
            [data.image, data.title, JSON.stringify(data.technologies), data.description, id]
        )
    } finally {
        connection.release()
    }
}
