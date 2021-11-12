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


function sendJson(method) {
    return function(url, data, authData) {
        return fetch(url, {
            method: method,
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
}

export const patchJson = sendJson('PATCH')
export const putJson = sendJson('PUT')