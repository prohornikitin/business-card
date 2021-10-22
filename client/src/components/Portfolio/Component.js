import React from "react";
import s from './style.scss'
import classnames from 'classnames'

function createItem({image, title, technologies}) {
    return (
        <div key={image} 
            className={s.item} 
            style={{background: `url(${image}) center center/cover`,}}
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