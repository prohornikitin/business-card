import React from 'react';
import s from './style.scss'


export default function FileUpload({required, children}) {
    return (
        <label className={s.label}>
            {children}

            {required ?
                <input required type="file" className={s.input}/> 
                :
                <input type="file" className={s.input}/>
            }
        </label>
    );
}