import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/user";

interface isAuthState {
    isAuth: boolean;
    user: User;
}

const initialStateUser: User = {
    displayName: '',
    email: '',
    photoURL: '',
    uid: '',
}

const initialState: isAuthState = {
    isAuth: false,
    user: initialStateUser,
}

export const isAuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        changeUid: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        }
    }
})

export default isAuthSlice.reducer;
export const { changeAuth, changeUid } = isAuthSlice.actions;