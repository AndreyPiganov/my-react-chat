import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice.js'
import channelReducer from './slices/channelSlice.js';

export default configureStore({
    reducer: {
        user: userReducer,
        channel: channelReducer,
    },
})