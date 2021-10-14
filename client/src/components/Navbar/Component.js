import React, { useState } from "react";
import style from './style.scss'
import { Link } from "react-scroll";
import classnames from 'classnames'

export default function Navbar({items}) {
    const [activeLink, setActiveLink] = useState(items[0])

    const links = items.map((item)=>{
        const isActive = (activeLink === item)
        return (
            <div key={item.text} className={style.item}>
                <Link
                    activeClass="active"
                    to={item.sectionId}
                    onSetActive = {(_)=>{
                        setActiveLink(item)
                    }}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <div className={classnames(
                        style.link, 
                        isActive ? style.link_selected : ""
                    )}>
                        {item.text}
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <div className={style.placeholder} id="da"></div>
            <nav className={style.container}>
                {links}
            </nav>
        </div>
    );
}