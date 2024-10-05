import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice';
import infoSlice, { info } from './infoSlice';
import loginInfoSlice from './loginInfoSlice';
import pollSlice from './pollSlice'
import ynSlice from './ynSlice'
const store = configureStore({
    reducer: {
        auth: authSlice,
        info: infoSlice,
        linfo: loginInfoSlice,
        poll: pollSlice,
        yn: ynSlice
    }
})

export default store;
