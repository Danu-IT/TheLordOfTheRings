interface DataRace {
    value: string,
    active: boolean
}

interface Toast {
    position: string,
    autoClose: number,
    hideProgressBar: boolean,
    closeOnClick: boolean,
    pauseOnHover: boolean,
    draggable: boolean,
    progress: undefined,
}

interface RootState {
    speciesSlice: {
        favorites: CharacterCustomElement[];
        history: string[]
    }
}