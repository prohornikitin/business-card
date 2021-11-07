import React from 'react'
import s from './style.scss'


export default function Select({children, defaultValue, onChange}) {
    return (
        <div className={s.wrapper}>
            <select className={s.select} defaultValue={defaultValue, onChange}>
                {children}
            </select>
        </div>
    )
}