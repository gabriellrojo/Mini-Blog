import { NavLink } from "react-router-dom"
import styles from './Navbar.module.css'


const Navbar = () => {
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
                <NavLink to="/login" className={({isActive}) => ((isActive) ? (styles.active) : (""))}>Entrar</NavLink>
            </li>
            <li>
                <NavLink to="/login" className={({isActive}) => ((isActive) ? (styles.active) : (""))}>Criar Post</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={({isActive}) => ((isActive) ? (styles.active) : (""))}>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/register" className={({isActive}) => ((isActive) ? (styles.active) : (""))}>Cadastrar</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => ((isActive) ? (styles.active) : (""))}>Sobre</NavLink>
            </li>
            <li>
                <NavLink to="/login" className={({isActive}) => ((isActive) ? (styles.active) : (""))}>Sair</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar