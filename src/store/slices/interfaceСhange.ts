import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { logout } from "./auth";

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
    },
    extraReducers: (builder) => {
        builder.addCase(logout, (state) => {
            state.isDropDownSignOut = false
        })
    }
})

export default interfaceСhange.reducer;
export const { changeIsDropDownSignOut } = interfaceСhange.actions;