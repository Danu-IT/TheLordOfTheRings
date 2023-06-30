import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {  
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import slices from './slices';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
  }

const rootReducer = combineReducers(slices);

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];