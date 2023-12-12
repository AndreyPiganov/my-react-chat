import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    user: null,
};

const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        userLogin(state, {payload}){
            state.user = payload;
            state.isAuth = true;
        },
        logout(state, {payload}){
            state.user = null;
            state.isAuth = false;
        }
    }
});

export const {userLogin, logout} = userSlice.actions;
export default userSlice.reducer;