import React from 'react'
import s from './style.scss'
import Modal from 'react-modal'
    

export default function ReadMoreDialog({isOpen, onRequestClose, data}) {
    const style = {
        overlay: {
            backgroundColor: "000000AA"
        },
        content: {
            boxSizing: "border-box",
            border: "none",
            borderRadius: "20px",
            backgroundColor: "#333",
            inset: "200px",
            width: "1200px",
            margin: "auto",
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
                    <h3>Technologies:</h3>
                    <ul>{techList}</ul>
                    <h3 style={{display:"inline"}}>Description: </h3>
                    <p>{data.description}</p>
                    <p>Link: <a href={data.link}>{data.link}</a></p>
                </div>
            </div>
            
            {/* <p>{data.description}</p> */}
            <div className={s.closeButton} onClick={onRequestClose}/>
        </Modal>
    );
}