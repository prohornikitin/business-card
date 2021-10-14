import React from "react";
import s from './style.scss'
import classnames from 'classnames'

export default function Section({children, id, className, style}) {
    return (
        <section className={classnames(s.main, className)} id={id} style={style}>
            {children}
        </section>
    );
}