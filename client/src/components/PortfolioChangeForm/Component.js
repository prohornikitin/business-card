import React, { useState } from 'react'
import FileUpload from '../FileUpload/Component'
import { uploadFile, putJson } from '../../etc/network'
import Select from '../Select/Component'
import { useFetch } from '../../hooks'

export default function PortfolioChangeForm({authData}) {
    const [portfolio, errors] = useFetch('/api/portfolio', [])

    const [projectId, setProjectId] = useState(-1);

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [technologies, setTechnologies] = useState('')
    const [image, setImage] = useState()
    const [link, setLink] = useState()


    const onSuccess = () => {
        console.log("SUCCESS")
    }

    const onError = (err) => {
        console.error(err)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        const id = (projectId != -1) ? projectId : undefined
        if(image) {
            uploadFile(image, authData)
            .then(fileName => {
                console.log(fileName)
                putJson(
                '/api/portfolio', 
                {
                    id,
                    image: fileName,
                    title, 
                    description,
                    technologies,
                    link
                },
                authData
            )})
            .then(onSuccess)
            .catch(onError)
        } else {
            putJson(
                '/api/portfolio', 
                {id, title, description, technologies, link},
                authData
            )
            .then(onSuccess)
            .catch(onError)
        }
    }

    return (
        <form method='post' onSubmit={onSubmit}>
            <Select defaultValue="-1" onChange={(e)=>setProjectId(event.target.value)}>
                <option value="-1">Новый проект</option>
                {portfolio.map(i => <option key={i.id} value={i.id}>{i.title}</option>)}
            </Select>
            <br/>
            <input name='title' 
                placeholder='Название' 
                onChange={(e)=>setTitle(e.target.value)}
            />
            <input name='technologies' 
                placeholder='Технологии' 
                onChange={(e)=>setTechnologies(e.target.value)}
            />
            <input name='link'
                placeholder='Ссылка'
                onChange={e=>setLink(e.target.value)}
            />
            <textarea name='description' 
                placeholder='Описание' 
                onChange={(e)=>setDescription(e.target.value)}
            />
            <FileUpload label='Картинка' onChange={setImage}/>
            <input type='submit' name ='submit' value='Изменить'/>
        </form>
    )
}