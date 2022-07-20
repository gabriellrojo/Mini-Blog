import styles from "./Login.module.css"
import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState()
  const [error, setError] = useState()
  const [password, setPassword] = useState()
  const { login, error: authError, loading } = useAuthentication()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    const user = {
      email: email,
      password: password
    }

    await login(user)

    navigate("/")
  
  }

  useEffect(() => {
    if(authError){
      setError(authError)
    }
  },[authError])
  
  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para utilizar fazer sua postagem</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type= "email" required placeholder="Digite o seu email"/>
        </label>
        <label>
          <span>Senha:</span>
          <input onChange={(e) => setPassword(e.target.value)}value={password} type="password" required placeholder="Digite a sua senha" />
        </label>
        {loading && <button className="btn" disabled>Aguarde...</button>}
        {!loading && <button className="btn">Entrar</button>}
      </form>
    </div>
  )
}

export default Login