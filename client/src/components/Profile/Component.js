import React, { useState } from "react";
import s from './style.scss'
import classnames from 'classnames'

export default function Profile({photo, name, job, about}) {
    return (
        <div className={s.container}>
            <div style={{margin:"auto"}}>
                <img src={photo} className={s.photo}></img>
                <p className={classnames(s.text, s.photo_caption)}>
                    {name}
                    <br/>
                    {job}
                </p>
            </div>
            <div className={s.about}>
                <p className={s.text}>{about}</p>
            </div>
        </div>
    );
}