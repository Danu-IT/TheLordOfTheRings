import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface authState {
    isDropDownSignOut: boolean;
}

const initialState: authState = {
    isDropDownSignOut: false,
}
 
export const interfaceСhange = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeIsDropDownSignOut: (state, action: PayloadAction<boolean>) => {
            state.isDropDownSignOut = action.payload;
        },
    }
})

export default interfaceСhange.reducer;
export const { changeIsDropDownSignOut } = interfaceСhange.actions;