import React, { useState } from 'react'
import { patchJson } from '../../etc/network'

export default function EmailChangeForm({authData}) {
    const [host, setHost] = useState();
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()

    const onSuccess = () => console.log("SUCCESS")
    const onError = (err) => console.error(err)

    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            email,
            host,
            username,
            password,
        }
        patchJson('/api/email', data, authData)
        .then(onSuccess)
        .catch(onError)
    }

    return (
        <form method='post' onSubmit={onSubmit}>
            <input name='email'
                type='email'
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
            />
            <input name='host'
                placeholder='Сервер'
                onChange={e => setHost(e.target.value)}
            />
            <input name='username'
                placeholder='Имя пользоватея'
                onChange={e => setUserName(e.target.value)}
            />
            <input name='password'
                type='password'
                placeholder='Пароль'
                onChange={e => setPassword(e.target.value)}
            />
            <input type='submit' name='submit' value='Изменить'/>
        </form>
    )
}