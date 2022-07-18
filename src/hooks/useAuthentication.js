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

    const auth = getAuth();
    
    //register
    const createUser = async (data) => {
        setError("")
        
        try{
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, 
                {displayName: data.displayName})
            
            return user
        } catch (error){
            let textMsgError
            if(error.message.includes("Password")){
                textMsgError = "A senha precisa ter no mínimo 6 caracteres"
            }else if(error.message.includes("email-already")){
                textMsgError = "Email já cadastrado"
            }else{
                textMsgError = "Ocorreu um problema. Tente mais tarde"
            }
            setError(textMsgError)
       }
    }
    
    return {auth, createUser, error }
}