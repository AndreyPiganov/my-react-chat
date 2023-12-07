import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    user: null,
};

const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        login(state, {payload}){
            state.user = payload;
            state.isAuth = true;
        },
        logout(state, {payload}){
            state.user = null;
            state.isAuth = false;
        }
    }
});

export const {actions} = userSlice;
export default userSlice.reducer;