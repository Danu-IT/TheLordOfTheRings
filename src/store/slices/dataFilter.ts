import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface authState {
    filterRace: string;
}

const initialState: authState = {
    filterRace: '',
}
 
export const dataFilter = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeFilterRace: (state, action: PayloadAction<string>) => {
            state.filterRace = action.payload;
        },
    }
})

export default dataFilter.reducer;
export const { changeFilterRace } = dataFilter.actions;