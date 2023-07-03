import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface authState {
    isDropDownSignOut: boolean;
    isFocusSearch: boolean;
}

const initialState: authState = {
    isDropDownSignOut: false,
    isFocusSearch: false,
}
 
export const interfaceСhange = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeIsDropDownSignOut: (state, action: PayloadAction<boolean>) => {
            state.isDropDownSignOut = action.payload;
        },
        changeIsFocusSearch: (state, action: PayloadAction<boolean>) => {
            state.isFocusSearch = action.payload;
        },
    }
})

export default interfaceСhange.reducer;
export const { changeIsDropDownSignOut, changeIsFocusSearch } = interfaceСhange.actions;