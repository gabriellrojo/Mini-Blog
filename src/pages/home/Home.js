import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import styles from './Home.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const { documents } = useFetchDocuments
  ("post")
  const [query, setQuery] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/posts/search?q=${query}`)

  }
  
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input value={query} onChange={e => setQuery(e.target.value)} type="text" required placeholder='Busque sem "#"' />
        <button className="btn">Pesquisar</button>
      </form>
      <h1>Veja os nossos posts mais recentes</h1>
      {documents&& documents.map(document => (
        <div className={styles.posts}>
          <img src={document.image} />
          <h3 className={styles.title}>{document.title}</h3>
          <p className={styles.author}> <span>por:</span> {document.createdBy}</p>  
          <div className={styles.tags}>
            {document.tags.map(tag => (
              <p><span>#</span>{tag}</p>
            ))}  
          </div>
          <Link to={`/posts/${document.id}`} className="btn btn-outline">Ler Post</Link>      
        </div>
      ))}
      {documents&& documents.length === 0 &&
      <div className={styles.no_post}>
        <p>Não foram encontrados posts</p>
        <Link to="/posts/create" className="btn">Criar primeiro post</Link>
      </div>
      }
    </div>
  )
}

export default Home