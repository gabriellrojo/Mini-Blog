import React from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  const { documents } = useFetchDocuments
  ("post")
  
  return (
    <div className={styles.container}>
      <h1>Veja os nossos posts mais recentes</h1>
      {documents&& documents.map(document => (
        <div className={styles.posts}>
          <img src={document.image} />
          <h3 className={styles.title}>{document.title}</h3>
          <p className={styles.author}>    <span>por:</span> {document.createdBy}</p>  
          <div className={styles.tags}>
            {document.tags.map(tag => (
              <p className={styles.tag}>{tag}</p>
            ))}  
          </div>
          <Link to={`/posts/${document.id}`} className="btn btn-outline">Ler Post</Link>      
        </div>
      ))}
      {documents&& documents.length === 0 &&
      <div className={styles.no_post}>
        <p>Não foram encontrados posts</p>
        <button className="btn">Criar primeiro Post</button>
      </div>
      }
    </div>
  )
}

export default Home