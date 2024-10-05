import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false
}

const infoSlice = createSlice({
    name: "info",
    initialState,
    reducers: {
        info: (state)=>{
          state.status= true
        },
        cleanInfo: (state)=>{
            state.status= false

        }
    }
})

export const {info, cleanInfo} = infoSlice.actions

export default infoSlice.reducer