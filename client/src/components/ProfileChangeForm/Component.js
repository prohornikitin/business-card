import React, { useState } from 'react'
import FileUpload from '../FileUpload/Component'
import { uploadFile, putJson } from '../../etc/network'

export default function ProfileChangeForm({authData}) {
    const [photo, setPhoto] = useState()
    const [name, setName] = useState()
    const [job, setJob] = useState()
    const [about, setAbout] = useState()


    const onSuccess = () => {
        console.log("SUCCESS")
    }

    const onError = (err) => {
        console.error(err)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        console.log({
            name, 
            job, 
            about
        })
        if(photo) {
            uploadFile(photo, authData)
            .then(fileName => putJson(
                '/api/profile', 
                {
                    photo: fileName,
                    name, 
                    job, 
                    about
                },
                authData
            ))
            .then(onSuccess)
            .catch(onError)
        } else {
            putJson(
                '/api/profile', 
                {name, job, about},
                authData
            )
            .then(onSuccess)
            .catch(onError)
        }
    }


    return (
        <form method='post' onSubmit={onSubmit}>
            <FileUpload label='Фото' onChange={setPhoto}/>
            <input name='name' placeholder='Имя' onChange={(e)=>setName(e.target.value)}/>
            <input name='job' placeholder='Работа' onChange={(e)=>setJob(e.target.value)}/>
            <input name='about' placeholder='Обо мне' onChange={(e)=>setAbout(e.target.value)}/>
            <input type='submit' name ='submit' value='Изменить' />
        </form>
    )
}