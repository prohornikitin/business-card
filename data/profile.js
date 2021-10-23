const fs = require('fs/promises');

const filePath = './data/file-storage/profileData.json'

async function get() {
    const buffer = await fs.readFile(filePath)
    return JSON.parse(buffer.toString())
}


async function update(newData) {
    let data = await module.exports.get()
    Object.assign(data, newData);
    await fs.writeFile(filePath, JSON.stringify(data))
}

module.exports = {
    get,
    update,
}