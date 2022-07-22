import React from 'react'
import { createRenderer } from 'react-dom/test-utils'
import { useAuthContext } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import styles from "./Dashboard.module.css"

const Dashboard = () => {
  
  const { user } = useAuthContext()
  const { documents } = useFetchDocuments("post", null, user.uid)
  console.log(documents)
  
  return (
    <div>
      <h3>Esses são os posts criados por você: <span>{user.displayName}</span></h3>
      {documents && documents.map(document => (
        <div className={styles.container}>
          <h2>{document.title}</h2>
          <img src={document.image} />
          <p>por: <span>{document.createdBy}</span></p>
          <p>{document.body}</p>
          <div className={styles.tags}>
            {document.tags.map(tag => (
              <p><span>#</span>{tag}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Dashboard