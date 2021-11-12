const db = require('./db')


module.exports.getAll = async() => {
    const conn = await db.connect()
    try {
        const [rows, fields] = await conn.query('SELECT * FROM Portfolio')
        return rows.map(i => Object.assign({}, i, {technologies: JSON.parse(i.technologies)}));
    } finally {
        conn.release()
    }
}

module.exports.putNew = async(data) => {
    const conn = await db.connect()
    try {
        return conn.query(`INSERT INTO Portfolio
        (title, image, technologies, description, link) VALUES (?, ?, ?, ?, ?)`,
        [data.title, data.image, JSON.stringify(data.technologies), data.description, data.link])
    } finally {
        conn.release()
    }
}

module.exports.updateExisting = async(id, data) => {
    const conn = await db.connect()
    try {
        let args = `
            ${data.title ? 'title = ?,' : ''}
            ${data.image ? 'image = ?,' : ''}
            ${data.technologies ? 'technologies = ?,' : ''}
            ${data.description ? 'description = ?,' : ''}
            ${data.link ? 'link = ?,' : ''}`
        args = args.slice(1, args.lastIndexOf(','))

        return conn.query(
            `UPDATE Portfolio SET ${args} WHERE id=?`,
            [
                data.title,
                data.image,
                data.technologies ? JSON.stringify(data.technologies) : undefined, 
                data.description,
                data.link,
                data.id
            ].filter(i => !!i)
        )
    } finally {
        conn.release()
    }
}
