import { NavLink } from "react-router-dom"
import { useAuthContext } from '../context/AuthContext'
import { useAuthentication } from "../hooks/useAuthentication"
import styles from './Navbar.module.css'


const Navbar = () => {

  const { user } = useAuthContext()
  const { logout } = useAuthentication()

  return (
    <div className={styles.navbar}>
        <NavLink className={styles.logo} to="/">
            Mini<span>BLOG</span>
        </NavLink>
        <ul className={styles.listLinks}>
            <li>
                <NavLink to="/" className={({isActive}) => ((isActive) ? (styles.active) : (""))}>Home</NavLink>
            </li>
            <li>
                {!user && <NavLink to="/login" className={({isActive}) => ((isActive) ? (styles.active) : (""))}>Entrar</NavLink>}
            </li>
            <li>
               {user && <NavLink to="/posts/create" className={({isActive}) => ((isActive) ? (styles.active) : (""))}>Criar Post</NavLink>} 
            </li>
            <li>
                {user && <NavLink to="/dashboard" className={({isActive}) => ((isActive) ? (styles.active) : (""))}>Dashboard</NavLink>}
            </li>
            <li>
                {!user && <NavLink to="/register" className={({isActive}) => ((isActive) ? (styles.active) : (""))}>Cadastrar</NavLink>}
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => ((isActive) ? (styles.active) : (""))}>Sobre</NavLink>
            </li>
            <li>
                {user && <button className={styles.botao} onClick={logout}>Sair</button>}
            </li>
        </ul>
    </div>
  )
}

export default Navbar