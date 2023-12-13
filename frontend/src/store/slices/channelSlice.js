import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: localStorage.getItem('user_last_channel') || 'general',
}

const channelSlice = createSlice({
    name: 'channel',
    initialState, 
    reducers: {
        setChannel(state,{payload}){
            state.name = payload;
        },
        deleteChannel(state,{payload}){
            state.name = initialState.name;
        }
    }
});

export const {setChannel, deleteChannel} = channelSlice.actions;
export default channelSlice.reducer;