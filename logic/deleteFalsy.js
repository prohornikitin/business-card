function deleteFalsy(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, val]) => !!val));
}

module.exports = {
    deleteFalsy
}