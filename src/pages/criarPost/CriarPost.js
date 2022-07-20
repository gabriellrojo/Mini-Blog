import styles from './CriarPost.module.css'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { usePostDocument } from '../../hooks/usePostDocument'
import { useNavigate } from 'react-router-dom'

const CriarPost = () => {
  const [title, setTitle] = useState()
  const [image, setImage] = useState()
  const [body, setBody] = useState()
  const [tags, setTags] = useState()
  const [error, setError] = useState()
  const { user } = useAuthContext()
  const navigate = useNavigate()
  const { postDocument } = usePostDocument("post")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      new URL (image)
    } catch {
      setError("A imagem deve ser URL")
    }

    if(error){
      return
    }

    const arrayTags = tags.split(",")
    arrayTags.map(tag => (
      tag.toLowerCase().trim()
    ))

      await postDocument ({
      title: title,
      image: image,
      body: body,
      tags: arrayTags,
      uid: user.uid,
      createdBy: user.displayName
    })

    navigate("/")
    
  }

  return (
    <div className={styles.createPost}>
      <h1>Crie seu post</h1>
      <p>Crie seu poste e conte suas histórias para o mundo</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input name="title" type="text" required placeholder='Digite o título do post' onChange={e => setTitle(e.target.value)}/>
        </label>
        <label>
          <span>Imagem:</span>
          <input name="image" type="text" required placeholder='Insira um URL válido' onChange={e => setImage(e.target.value)}/>
        </label>
        <label>
          <span>Destrição:</span>
          <textarea name="body" placeholder="Digite a descrição da imagem" onChange={e => setBody(e.target.value)}></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input name="tags" type="text" required placeholder="Digite as tags" onChange={e => setTags(e.target.value)}/>
        </label>
        <button className="btn">Criar</button>
        {error&& <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default CriarPost