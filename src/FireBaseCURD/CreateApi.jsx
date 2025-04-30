import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from '../Firebase/config'; 

export const CreateApi = async(postData)=>{
try{
    const docRef = await addDoc(collection(db,'testing'),postData);
    console.log('postdata: from component',postData);
    
    return{
        id: docRef.id, ...postData,

    }
} catch (error) {
console.log('error adding Documents',error);

}
}