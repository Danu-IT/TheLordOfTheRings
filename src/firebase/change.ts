import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { db } from "."

export const saveItem = async (data: CharacterCustomElement[], id: string, directory: string) => {
    await setDoc(doc(db, directory, id), { docs: data }, { merge: true });
}

export const getAllCardItems = async (collectionName: string, user: string) => {
    let returnDocs = {};
    const items = await getDocs(query(collection(db, collectionName)));
    items.forEach(item => {
        if(user === item.id){
            returnDocs = item.data();
        }
    })
    return returnDocs;
}