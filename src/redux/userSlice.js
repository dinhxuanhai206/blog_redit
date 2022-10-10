import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Edward Dinh",
    age: "22",
    about: "i'm frontend developer",
    avaUrl: "https://i.redd.it/ib7scrg5t7w61.png",
    theme: "#ff9051",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.theme = action.payload.theme;
    },
  },
});
export const { update} = userSlice.actions;

export default userSlice.reducer;
