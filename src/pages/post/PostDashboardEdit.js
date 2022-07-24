import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useParams, useNavigate } from 'react-router-dom'
import { useEditDocument } from '../../hooks/useEditDocument'
import styles from './PostDashboardEdit.module.css'


const PostDashboardEdit = () => {
  
  const { id } = useParams()
  const { document } = useFetchDocument("post", id)
  const { user } = useAuthContext()
  const [title, setTitle] = useState()
  const [image, setImage] = useState()
  const [body, setBody] = useState()
  const [tags, setTags] = useState()
  const { editDocument } = useEditDocument("post")
  const [error, setError] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    if(document){
      setTitle(document.title)
      setImage(document.image)
      setBody(document.body)

      const arrayText = document.tags.join(", ")
      setTags(arrayText)
    }
  },[document])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try{
      new URL(image)
    } 
    catch(error) {
      setError("A imagem deve ser um URL válido")
    }

    const arrayTags = tags.split(", ")
    arrayTags.map(tag => (
      tag.toLowerCase().trim()
    ))

    const post = {
      title: title,
      image: image,
      body: body,
      tags: arrayTags
    }

    await editDocument (id, post)

    navigate("/dashboard")

  }

  return (
    <div>
      <h2>Edite seus posts: <span>{user.displayName}</span></h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input value={title} name="title" type="text" required placeholder='Digite o título do post' onChange={e => setTitle(e.target.value)}/>
        </label>
        <label>
          <span>Imagem:</span>
          <input value={image} name="image" type="text" required placeholder='Insira um URL válido' onChange={e => setImage(e.target.value)}/>
        </label>
        <label>
          <span>Destrição:</span>
          <textarea value={body} name="body" placeholder="Digite a descrição da imagem" onChange={e => setBody(e.target.value)}></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input value={tags} name="tags" type="text" required placeholder='sem "#" e separadas por vírgula' onChange={e => setTags(e.target.value)}/>
        </label>
        <button className="btn">Editar</button>
      </form>
    </div>
  )
}

export default PostDashboardEdit