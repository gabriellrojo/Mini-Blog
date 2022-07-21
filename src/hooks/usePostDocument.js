import { db } from "../firebase/config"
import {collection, addDoc, Timestamp } from "firebase/firestore"

export const usePostDocument = (docCollection) => {
    
    const postDocument = async (document) => {

        try{
            const newDocument = {...document, createAt: Timestamp.now()} //adicionei a data a hora de criação ao documento que será postado

            await addDoc(collection(db, docCollection), newDocument)
        }
        catch(error){
            console.lot(error.message)
        }
    }
    return { postDocument }
}