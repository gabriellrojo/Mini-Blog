import { getDoc, doc } from "firebase/firestore"
import { db } from "../firebase/config"
import { useEffect, useState } from "react"

export const useFetchDocument  = (docCollection, id) => {
    const [document, setDocument] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        const fetchDoc = async () => {

            try{
                const docRef = await doc(db, docCollection, id)
                const docSnap = await getDoc(docRef)
                setDocument(docSnap.data())
            }

            catch (error) {
                setError(error.message)
            }
        }
        fetchDoc()
    },[docCollection, id])
    
    return { document, error }
}