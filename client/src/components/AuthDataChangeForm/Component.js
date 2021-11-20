import React, { useState } from 'react'
import FileUpload from '../FileUpload/Component'
import { uploadFile, patchJson, putJson } from '../../etc/network'
import Select from '../Select/Component'
import { useFetch } from '../../hooks'

export default function AuthDataChangeForm({authData}) {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")


    const onSuccess = () => {
        console.log("SUCCESS")
    }

    const onError = (err) => {
        console.error(err)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            login,
            password
        }

        patchJson('/api/authData', data, authData)
        .then(onSuccess)
        .catch(onError)
    }

    return (
        <form method='post' onSubmit={onSubmit}>
            <br/>
            <input name='login'
                placeholder='Новый логин'
                onChange={e => setLogin(e.target.value)}
            />
            <input name='password'
                type='password'
                placeholder='Новый пароль'
                onChange={e => setPassword(e.target.value)}
            />
            <input type='submit' name='submit' value='Изменить'/>
        </form>
    )
}