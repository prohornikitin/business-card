export function uploadFile(file, authData) {
    let formData = new FormData()
    formData.append('file', file)
    formData.append('login', authData.login)
    formData.append('password', authData.password)
    return fetch('/api/upload', {
        method: 'PUT',
        body: formData
    })
    .then(res => res.json())
}

export function putJson(url, data, authData) {
    console.log({
        authData, 
        data
    })
    return fetch(url, {
        method: 'PUT',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            authData, 
            data
        })
    }).then(res => {
        if(!res.ok) {
            throw res.statusText
        }
    })
}