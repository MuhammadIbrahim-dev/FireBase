import { collection, doc, deleteDoc } from "firebase/firestore";
import { db } from '../Firebase/config'; 
export const DeleteApi = async (ReciepId) => {
    try {
        // Create a reference to the document you want to delete    
        const docRef = doc(db,'testing',ReciepId);
        await deleteDoc(docRef);
        return ReciepId;
    } catch (error) {
        console.log('This post is not deleted', error);
    }
}