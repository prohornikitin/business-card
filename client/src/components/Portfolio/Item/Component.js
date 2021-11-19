import React, { useState } from 'react'
import s from './style.scss'
import ReadMoreDialog from '../ReadMoreDialog/Component';


export default function Item({image, title, technologies, description, link}) {
    const [dialogOpen, setDialogOpen] = useState(false);
    console.log("TECH:", technologies)
    const techStr = (technologies.length != 0) ? technologies.reduce((acc, tech) => `${acc} / ${tech}`) : ""

    return (
        <div key={image} 
            className={s.container} 
            style={{background: `url(${image}) center center/cover`,}}
        >
            <ReadMoreDialog 
                isOpen={dialogOpen} 
                onRequestClose={()=>setDialogOpen(false)}
                data={{image, title, technologies, description, link}}
            />
            <div className={s.content} style={{background: "#111A"}}>
                <h4 className={s.title}>{title}</h4>
                <p className={s.technologies}>{techStr}</p>
                <div className={s.readmoreButton} onClick={()=>setDialogOpen(true)}>
                    Read More
                </div>
            </div>
        </div>
    );
}