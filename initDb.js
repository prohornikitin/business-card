const db = require('./data/db')


async function init() {
    const connection = await db.connect()
    
    await connection.dropDatabase()

    await connection.collection('single').insertMany([
        {
            type: 'profile',
            name:'Name',
            job:'Not a web-developer',
            about:'This is a text about me. '.repeat(20),
            photo:'images/profile_photo.jpg',
            email:'i@am.da',
        },
        {
            type: 'authData',
            login: 'duda',
            password: '1',
        },
    ])

    await connection.collection('portfolio').insertMany([
        {
            id: 0,
            image:'images/uploaded/mystand-1.jpg',
            title:'First Project',
            technologies: ['React', 'Express'],
            description: 'This is description '.repeat(50),
            link: 'www.yarik.bat'
        },
        {
            id: 1,
            image:'images/uploaded/never-0.jpg',
            title:'Second Project',
            technologies: ['React', 'Python'],
            description: 'This is description '.repeat(50),
            link: 'www.yarik.bat'
        },
        {
            id: 2,
            image:'images/uploaded/never-1.jpg',
            title:'Third Project',
            technologies: ['Angular / Ruby on rails'],
            description: 'This is description '.repeat(50),
            link: 'www.yarik.bat'
        }
    ])
}

init()
.then(process.exit)