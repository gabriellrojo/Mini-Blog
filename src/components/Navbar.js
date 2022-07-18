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
                <NavLink to="/register" className={({isActive}) => ((isActive) ? (styles.active) : (""))}>Cadastrar</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar