import { db } from "../firebase/config"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'
import { useState } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const auth = getAuth();
    
    //register
    const createUser = async (data) => {
        setError("")
        
        try{
            setLoading(true)
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, 
                {displayName: data.displayName})
             
            setLoading(false)
            return user 
        }
        
        catch (error){
            setLoading(true)
            let textMsgError = ""
            if(error.message.includes("Password")){
                textMsgError = "A senha precisa ter no mínimo 6 caracteres"
            }else if(error.message.includes("email-already")){
                textMsgError = "Email já cadastrado"
            }else{
                textMsgError = "Ocorreu um problema. Tente mais tarde"
            }
            setError(textMsgError)
            setLoading(false)
       }
    }

    //login

    const login = async (data) => {

        try{
            setLoading(true)
            await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            setLoading(false)
        } 
        catch (error) {
            setLoading(true)
            let textMsgError = ""
            if(error.message.includes("user-not-found")){
                textMsgError = "Usuário não encontrado"
            } else if(error.message.includes("worng-password")){
                textMsgError = "Senha incorreta"
            }else{
                textMsgError = "Ocorreu um erro. Tente mais tarde"
            }
            setError(textMsgError)
            setLoading(false)
        }
    }
    
    //logout

    const logout = () => {
        signOut(auth)
    }
    
    return {auth, createUser, login, error, logout, loading }
}