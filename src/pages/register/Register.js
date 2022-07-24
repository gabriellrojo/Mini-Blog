import styles from './Register.module.css'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useEffect, useState } from 'react'

const Register = () => {
    const [displayName, setDisplayName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [error, setError] = useState()
    const { createUser, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        const user = {
            displayName: displayName,
            email: email,
            password: password
        }

        if(password !== confirmPassword){
            setError("As senhas precisam ser iguais")
            
        } else{
            await createUser(user)
        }

    }

    useEffect(() => {
        if(authError){
            setError(authError)
        }
    }, [authError])
  
    return (
    <div className={styles.register}>
        <h1>Realize o seu Cadastro</h1>
        <p>Crie seu usuário e compartilhe as suas histórias</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input name='displayName' value={displayName} type="text" required placeholder='Digite o seu nome' onChange={e => setDisplayName(e.target.value)} />
            </label>
            <label>
                <span>Email:</span>
                <input name='email' value={email} type="email" required placeholder='Digite o seu email' onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha:</span>
                <input name='password' value={password} type="password" required placeholder='Digite a sua senha' onChange={e => setPassword(e.target.value)}/>
            </label>
            <label>
                <span>Confirme a sua senha:</span>
                <input name='confirmPassword' value={confirmPassword} type="password" required placeholder='Confirme a sua senha' onChange={e => setConfirmPassword(e.target.value)}/>
            </label>
            {loading && <button className="btn" disabled>Aguarde...</button>}
            {!loading && <button className="btn">Cadastrar</button>}
            {error && <p className="error">{error}</p> }
        </form>
    </div>
  )
}

export default Register