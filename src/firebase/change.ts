import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"
import { db } from "."

export const saveItem = async (data: CharacterCustomElement[], id: string, directory: string) => {
    await setDoc(doc(db, directory, id), { docs: data }, { merge: true });
}

export const getAllCardItems = async (collectionName: string, user: string) => {
    const items = await getDocs(query(collection(db, collectionName)));
    const item = items.docs.find(el => el.id === user)
    const data = item && item.data()
    return data;
}