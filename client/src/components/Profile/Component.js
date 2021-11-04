import React, { useState } from "react";
import s from './style.scss'
import classnames from 'classnames'
import { useFetch } from "../../hooks";

export default function Profile({fetchUrl}) {
    const [data, error] = useFetch(fetchUrl, {})
    console.log(data)
    return (
        <div className={s.container}>
            <div style={{margin:"auto"}}>
                <img src={data.photo} className={s.photo}></img>
                <p className={classnames(s.text, s.photo_caption)}>
                    {data.name}
                    <br/>
                    {data.job}
                </p>
            </div>
            <div className={s.about}>
                <p className={s.text}>{data.about}</p>
            </div>
        </div>
    );
}