import React, {useState} from 'react'
import Modal from 'react-modal'
import s from './style.scss'

export default function AuthDialog({isOpen, onSuccessAuth}) {
    const style = {
        overlay: {
            backgroundColor: "#444444AA"
        },
        content: {
            width: "512px",
            height: "fit-content",
            margin: "auto",
            boxSizing: "border-box",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#111"
        }
    } 

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(undefined)
    

    const onSubmit = (e) => {
        e.preventDefault()
        fetch('/api/checkAuth',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({authData: {login, password}})
        })
        .then(res => {
            if(res.ok) {
                onSuccessAuth({login, password})
            } else if (res.status == 403){
                setError('Неверный логин или пароль')
            } else {
                setError(`${res.status} ${res.statusText}`)
            }
        })
        
    }
    
    return (
        <Modal
            isOpen={isOpen}
            style={style}
        >
            <h3 style={{textAlign: "center"}}>Прежде чем приступить, авторизуйтесь</h3>
            {error ?
                <p className={s.error}>{error}</p>
                : ""
            }
            <form onSubmit={onSubmit}>
                <input type='text' 
                    placeholder='Логин'
                    onChange={(e)=>setLogin(e.target.value)}>
                </input>
                <input type='password' 
                    placeholder='Пароль'
                    onChange={(e)=>setPassword(e.target.value)}>
                </input>
                <input type='submit' value='Войти'/>
            </form>
        </Modal>
    );
}