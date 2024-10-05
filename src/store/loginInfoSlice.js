import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    age: null,
    gender: null,
    religion: null
}

const loginInfoSlice = createSlice({
    name: "linfo",
    initialState,
    reducers:{
        setUserInfo: (state, action) => {
            const { username, age, gender, religion } = action.payload; 
            state.name = username;         
            state.age = age;           
            state.gender = gender;     
            state.religion = religion; 
        }

    }
})

export const {setUserInfo} = loginInfoSlice.actions

export default loginInfoSlice.reducer