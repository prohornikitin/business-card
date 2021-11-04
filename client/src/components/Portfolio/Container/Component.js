import React, { useEffect, useMemo, useState } from "react"
import s from './style.scss'
import classnames from 'classnames'
import Item from '../Item/Component'
import {useFetch} from '../../../hooks'

export default function Portfolio({fetchUrl}) {
    const [data, error] = useFetch(fetchUrl, [])
    const items = data.map(props => <Item key={props.id} {...props}/>)
    
    return <div className={s.container}> {items} </div>
}