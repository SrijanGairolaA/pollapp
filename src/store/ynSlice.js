import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false
}

const ynSlice = createSlice({
    name: "yn",
    initialState,
    reducers: {
        y: (state)=>{
            state.status = true
        },
        n: (state)=>{
            state.status = false
        }
    }
})

export const {y,n} = ynSlice.actions

export default ynSlice.reducer