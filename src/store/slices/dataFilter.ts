import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface authState {
    filterRace: string;
    favorites: CharacterCustomElement[];
    newData: CharacterCustom | null;
}

const initialState: authState = {
    newData: null,
    filterRace: '',
    favorites: []
}
 
export const dataFilter = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeFilterRace: (state, action: PayloadAction<string>) => {
            state.filterRace = action.payload;
        },
        toggleLike: (state, action: PayloadAction<CharacterCustomElement>) =>{
            let isExists = true
            state.favorites = state.favorites.filter(el => {
                if(el.id === action.payload.id){
                    isExists = false
                    return false
                }
                return true
            })
            if(isExists){
                const newData = {
                    ...action.payload,
                    like: true
                }
                state.favorites.push(newData)
            }
        },
        checkLikeStateAndFavorite: (state, action: PayloadAction<CharacterCustom>) => {
            const newData = action.payload.docs.map(el => {
                let isExists = false
                state.favorites && state.favorites.forEach(item => {
                    if(el.id === item.id) isExists = true
                })
                if(isExists) return {
                    ...el,
                    like: true
                }
                return el
            })
            state.newData = {
                docs: newData,
                limit: action.payload.limit,
                page: action.payload.page,
                pages: action.payload.pages
            };
        },
        changeFavorite: (state, action: PayloadAction<CharacterCustomElement[]>) => {
            state.favorites = action.payload
        }
    }
})

export default dataFilter.reducer;
export const { changeFilterRace, toggleLike, checkLikeStateAndFavorite, changeFavorite } = dataFilter.actions;