import { db } from "../firebase/config";
import { updateDoc, doc } from "firebase/firestore";

export const useEditDocument = (docCollection) => {

    const editDocument = async (uid, data) => {
        try{
            const docRef = await doc(db, docCollection, uid);
            const updatedDocument = await updateDoc(docRef, data)
        }
        catch (error){
            console.log(error.message)

        }
    }
    return { editDocument }
}