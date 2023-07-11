import { collection, doc, getDocs, query, setDoc } from "firebase/firestore"
import { db } from "."

export const saveItem = async (data: CharacterCustomElement[] | string[], id: string | null, directory: string) => {
    if (!id) return false
    await setDoc(doc(db, directory, id), { docs: data }, { merge: true });
}

export const getAllCardItems = async (collectionName: string, user: string | null) => {
    if (!user) return false
    const items = await getDocs(query(collection(db, collectionName)));
    const item = items.docs.find(el => el.id === user)
    const data = item && item.data()
    return data;
}