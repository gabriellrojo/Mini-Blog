import { db } from "../firebase/config"
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    where,
    QuerySnapshot
} from "firebase/firestore"
import { useEffect, useState } from "react"

export const useFetchDocuments = (docCollection) => {
    const [documents, setDocuments] = useState()
    const [error, setError] = useState()
    
    useEffect(() => {
        const fetchData = async () => {
            const collectionRef = await (collection(db, docCollection))
            
            try{
                let q
                q = await query(collectionRef, orderBy("createAt", "desc"))
                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                })
            }
            catch (error){
                setError(error.message)
            }
        }
        fetchData()
    },[docCollection])
    
    return {documents, error}
}