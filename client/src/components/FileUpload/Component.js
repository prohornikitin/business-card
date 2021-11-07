import React, { useState } from 'react';
import s from './style.scss'


export default function FileUpload({required, label, onChange}) {
    const [name, setName] = useState(label ? label : "Файл не выбран")

    const internalOnChange = (event) => {
        const file = event.target.files[0]
        setName(file.name)
        onChange(file)
    }

    return (
        <div className={s.container}>
            <p className={s.nameDisplay}>{name}</p>

            <label className={s.button}>
                Загрузить
                {required ?
                    <input required type="file" className={s.input} onChange={internalOnChange}/> 
                    :
                    <input type="file" className={s.input} onChange={internalOnChange}/>
                }
            </label>
        </div>
    );
}