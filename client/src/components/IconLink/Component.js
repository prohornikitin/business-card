import React from 'react';
import s from './style.scss'


export default function IconLink({icon, href}) {
    return (
        <a href={href} className={s.container}>
            <img className={s.image} src={icon}></img>
        </a>
    );
}