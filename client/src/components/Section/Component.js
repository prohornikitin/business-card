import React from "react";
import s from './style.scss'
import classnames from 'classnames'

export default function Section({title, children, id, className, style}) {
    return (
        <section className={classnames(title ? s.main_with_title : s.main_no_title, className)} id={id} style={style}>
            {
                title ? <h2 className={s.title}>{title}</h2> : ""
            }
            <div className={s.content}>
                {children}
            </div>
        </section>
    );
}