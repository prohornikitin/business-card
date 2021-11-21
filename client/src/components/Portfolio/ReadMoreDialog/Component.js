import React from 'react'
import s from './style.scss'
import Modal from 'react-modal'


export default function ReadMoreDialog({isOpen, onRequestClose, data}) {
    const style = {
        overlay: {
            backgroundColor: "#00000099"
        },
        content: {
            boxSizing: "border-box",
            border: "none",
            borderRadius: "20px",
            backgroundColor: "#333",
            width: "800px",
            margin: "auto",
            padding: "0",
            height: "fit-content",    
        }
    }
    const techList = data.technologies.map(i => <li key={i}>{i}</li>)
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={style}
            visible
        >
            <div className={s.container}>
                <img src={data.image} className={s.image}/>
                <div className={s.text}>
                    <div>{data.description}</div>
                </div>
                <div style={{margin:"16px auto", width: "fit-content", height: "fit-content"}}>
                    <a className={s.link} href={data.link}>
                        <svg style={{verticalAlign: "top"}} aria-hidden="false" width="14pt" height="14pt" viewBox="0 0 24 24"><path fill="currentColor" d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"></path><path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"></path></svg>
                        &ensp; Link
                    </a>
                </div>
            </div>
        </Modal>
    );
}