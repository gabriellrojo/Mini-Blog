import { useParams, Link } from "react-router-dom"
import { useFetchDocument } from "../../hooks/useFetchDocument"
import styles from "./Post.module.css"

const PostDashboard = () => {
  const { id } = useParams()
  const { document } = useFetchDocument("post", id)
  
  return (
    <div>
      {document && 
      <div className={styles.container}>
        <h1>{document.title}</h1>
        <img src={document.image} />
        <p>{document.body}</p>
        <div className={styles.tags}>
          {document.tags.map(tag => (
            <p className={styles.tag}><span>#</span>{tag}</p>
          ))}
        </div>
        <Link to="/dashboard" className='btn'>Voltar</Link>
      </div>
      }     
    </div>
  )
}

export default PostDashboard