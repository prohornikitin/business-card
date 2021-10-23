import React, { useState } from 'react';
import s from './style.scss'
import FileUpload from '../FileUpload/Component'
import classnames from 'classnames'


export default function ContactForm() {
    const [photo, setPhoto] = useState(undefined)
    const [name, setName] = useState(undefined)
    const [job, setJob] = useState(undefined)
    const [about, setAbout] = useState(undefined)

    const successMsg = 'Changed! TODO: actual change'
    const [hasBeenSent, setSent] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(new FormData(e.target))
        setSent(true)
    }

    return (
        <div className={s.container}>
            { hasBeenSent ?
                <div className={s.success_msg}> {successMsg} </div>
                : ''
            }
            <form href="#" onSubmit={onSubmit}>
                <FileUpload onChange={e=>{setPhoto(e.target.files[0])}}>Upload Profile Photo</FileUpload>
                <input placeholder="Name" name="name" onChange={e=>{setName(e.target.value)}}/>
                <input placeholder="Job" name="job" onChange={e=>{setJob(e.target.value)}}/>
                <input placeholder="About" name="about" onChange={e=>{setAbout(e.target.value)}}/>
                <input style={{marginTop:"16px"}} type="submit" value="Change"/>
            </form>
        </div>
    )
}
