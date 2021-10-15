import React from "react";
import s from './style.scss'
import classnames from 'classnames'

function createItem({imageRef, title, technologies}) {
    return (
        <div key={imageRef} 
            className={s.item} 
            style={{background: `url(${imageRef}) center center/cover`,}}
        >
            <div className={s.item__content} style={{background: "#111A"}}>
                <h4 className={s.item__title}>{title}</h4>
                <p className={s.item__technologies}>
                    { 
                        technologies.reduce((accumulator, current) => `${accumulator} / ${current}`)
                    }
                </p>
                <div className={s.item__readmoreButton}>
                    Read More
                </div>
            </div>
        </div>
    );
}

export default function Portfolio({items}) {
    return (
        <div className={s.container}>
            {items.map(i => createItem(i))}
        </div>
    );
}