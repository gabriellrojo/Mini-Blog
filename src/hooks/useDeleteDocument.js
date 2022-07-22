import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export const useDeleteDocument = (docCollection) => {
    const [error, setError] = useState()
    
    const deleteDocument = async (id) => {

        try{
            const deleteDocument = await deleteDoc(doc(db, docCollection, id))

        } 
        catch(error){
            setError(error.message)
        }

    }
    return {deleteDocument, error}
}