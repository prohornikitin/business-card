const db = require('./data/db')
const portfolioDao = require('./data/portfolio')

async function dropTablesIfExists() {
    const conn = await db.connect()
    try {
        await conn.query('DROP TABLE IF EXISTS Portfolio')
        await conn.query('DROP TABLE IF EXISTS Singleton')
    } finally {
        conn.release()
    }
}


async function createTables() {
    const conn = await db.connect()
    try {
        await conn.query(`CREATE TABLE IF NOT EXISTS Portfolio(
            id INT NOT NULL AUTO_INCREMENT,
            title VARCHAR(255) NOT NULL UNIQUE,
            image TEXT NOT NULL,
            description MEDIUMTEXT NOT NULL,
            technologies LONGTEXT NOT NULL,
            link TEXT NOT NULL,
            PRIMARY KEY(id)
        )`)
        await conn.query(`CREATE TABLE IF NOT EXISTS Singleton(
            id VARCHAR(255) NOT NULL,
            data LONGTEXT,
            PRIMARY KEY(id)
        );`)
    } finally {
        conn.release()
    }
}

async function fillTheTables() {
    const portfolio = [
        {
            image:'images/uploaded/mystand-1.jpg',
            title:'First Project',
            technologies: ['React', 'Express'],
            description: 'This is description',
            link: 'www.yarik.bat'
        },
        {
            image:'images/uploaded/never-0.jpg',
            title:'Second Project',
            technologies: ['React', 'Python'],
            description: 'This is description',
            link: 'www.yarik.bat'
        },
        {
            image:'images/uploaded/never-1.jpg',
            title:'Third Project',
            technologies: ['Angular / Ruby on rails'],
            description: 'This is description',
            link: 'www.yarik.bat'
        }
    ]
    await Promise.all(portfolio.map(project => portfolioDao.putNew(project)))

    const conn = await db.connect()
    try {
        await conn.query('INSERT INTO Singleton (id, data) VALUES (?, ?)', 
            [
                'authData', 
                JSON.stringify({
                    login: 'duda',
                    password: '1',
                })
            ]
        )
        await conn.query('INSERT INTO Singleton (id, data) VALUES (?, ?)', 
            [
                'profile', 
                JSON.stringify({
                    name:'Name',
                    job:'Not a web-developer',
                    about:'This is a text about me.',
                    photo:'images/profile_photo.jpg',
                    email:'i@am.da',
                })
            ]
        )
    } finally {
        conn.release()
    }
}

async function init() {
    await dropTablesIfExists()
    await createTables()
    await fillTheTables()
}

init()
.then(process.exit)