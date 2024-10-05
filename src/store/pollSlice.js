import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  age: [0, 0, 0, 0, 0],     
  gender: [0, 0, 0],          
  religon: [0, 0, 0, 0, 0],   
};

const pollSlice = createSlice({
  name: "poll",  
  initialState,
  reducers: {
    incAge: (state, action) => {
      const userAge = action.payload;

      if (userAge >= 18 && userAge <= 28) {
        state.age[0] += 1;
      } else if (userAge > 28 && userAge <= 35) {
        state.age[1] += 1;
      } else if (userAge > 35 && userAge <= 45) {
        state.age[2] += 1;
      } else if (userAge > 45 && userAge <= 55) {
        state.age[3] += 1;
      } else {
        state.age[4] += 1;
      }
    },
    incGender: (state, action) => {
      const userGender = action.payload;

      
      if (userGender === "male") {  
        state.gender[0] += 1;
      } else if (userGender === "female") {  
        state.gender[1] += 1;
      } else {
        state.gender[2] += 1; 
      }
    },
    incReligon: (state, action) => {
      const userR = action.payload;

      
      if (userR === "hindu") {      
        state.religon[0] += 1;
      } else if (userR === "muslim") { 
        state.religon[1] += 1;
      } else if (userR === "christian") {  
        state.religon[2] += 1;
      } else if (userR === "sikh") {
        state.religon[3] += 1;
      } else if (userR === "buddhist") {  
        state.religon[4] += 1;
      }
    },
  },
});

export const { incAge, incGender, incReligon } = pollSlice.actions;

export default pollSlice.reducer;