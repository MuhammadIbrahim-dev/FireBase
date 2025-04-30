import { getDocs, collection, doc } from "firebase/firestore";
import { db } from '../Firebase/config'; 

export const getCities = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'testing')); 
        
        let recipices = [];
        querySnapshot.forEach(doc => {
            recipices.push({ id: doc.id, ...doc.data() })});
        return recipices;
    } catch (error) {
        console.error("Error fetching cities:", error);
        return []; 
    }
};