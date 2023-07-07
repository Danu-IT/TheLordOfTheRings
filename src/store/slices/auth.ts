import { User } from "../../interfaces/user";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface authState {
    isAuth: boolean;
    user: User;
}

const initialStateUser: User = {
    displayName: '',
    email: '',
    photoURL: '',
    uid: '',
}

const initialState: authState = {
    isAuth: false,
    user: initialStateUser,
}

export const Auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        changeUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        userLoggedOut: (state, action: PayloadAction<undefined>) => {
            state.user = initialStateUser;
        },
        logout: (state, action: PayloadAction<undefined>) => {
            state.isAuth = false;
            state.user = initialStateUser;
        }
    }
})

export default Auth.reducer;
export const { changeAuth, changeUser, userLoggedOut, logout } = Auth.actions;