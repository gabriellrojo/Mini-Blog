import { useDeleteDocument } from '../../hooks/useDeleteDocument'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import styles from "./Dashboard.module.css"


const Dashboard = () => {
  
  const { user } = useAuthContext()
  const { documents } = useFetchDocuments("post", null, user.uid)
  const { deleteDocument } = useDeleteDocument("post")
  
  return (
    <div className={styles.principal}>
      <h1>Dashboard</h1>
      <h3>Olá: <span>{user.displayName}</span></h3>
      <p>Gerencie seus posts</p>
      <div className={styles.cabecalho}>
        <h4>Título</h4>
        <h4>Ações</h4>
      </div>
        <div>
          {documents && documents.map(document => (
            <div className={styles.container}>
              <h2>{document.title}</h2>
              <div className={styles.container_abaixo}>
                <Link className='btn btn-outline' to={`posts/${document.id}`}>Ver</Link>
                <Link className='btn btn-outline' to={`posts/edit/${document.id}`}>Editar</Link>
                <button className='btn btn-danger' onClick={() => deleteDocument(document.id)}>Excluir</button>
              </div>
            </div>
          ))}
          {documents && documents.length === 0 &&
          <div className={styles.no_posts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">Criar post</Link>
          </div>
          }  
        </div>
    </div>
  )
}

export default Dashboard