import React, { useState } from 'react'
import s from './style.scss'
import classnames from 'classnames'
import check_mark from '../../icons/check_mark.png'


export default function FileUpload({className, style, required, onChange, children}) {
    const [fileChose, setFileChose] = useState(undefined)

    const internalOnChange = (e) => {
        setFileChose(true)
        onChange(e)
    }

    return (
        <label className={classnames(className, s.label)} style={style}>
            {children}
            
            {required ?
                <input required type="file" onChange={internalOnChange} className={s.input}/> 
                :
                <input type="file" onChange={internalOnChange} className={s.input}/>
            }

            {
                fileChose ? <img className={s.success_img} src={check_mark}></img> : ""
            }
        </label>
    )
}