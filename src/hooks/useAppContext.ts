import { useContext } from 'react'
import { AppContext } from '../context';

export const useAppContext = () => {
    const data = useContext(AppContext);

    if (!data) {
        throw new Error("Can not useAppContext outside of the AppProvider")
    }
    return data;
}