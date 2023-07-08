import { createContext } from "react";

interface AppContext {
    regularСardType: boolean;
    setRegularСardType: (value: boolean) => void;
}

export const AppContext = createContext<AppContext | null>(null)
export const AppProvider = AppContext.Provider 