const { SMTPClient } = require('emailjs')
const emailConfigStorage = require('../data/email')

async function sendAnEmail(from, name, msg) {
    const config = await emailConfigStorage.get()

    const client = new SMTPClient({
        user: config.username,
        password: config.password,
        host: config.host,
        ssl: true,
    });

    const message = await client.sendAsync({
        text: msg,
        from: config.email,
        to: 'prohornikitin@yandex.ru',
        subject: `From ${name}, email: ${from}, using site-card`,
    });
    console.log(message);
}

module.exports = {
    sendAnEmail
}