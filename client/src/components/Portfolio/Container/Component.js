import React from "react";
import s from './style.scss'
import classnames from 'classnames'
import Item from '../Item/Component'


export default function Portfolio({items}) {
    return (
        <div className={s.container}>
            {items.
            map(i => Object.assign({description: "This is a description. ".repeat(30)}, i)).
            map(i => Item(i))}
        </div>
    );
}