import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [
      { 
        id: 0,
        title: "",
        desc: "",
      },
    ],
  },
  reducers: {
    createPost: (state, action) => {
      console.log(state);
      state.posts = [...state.posts, action.payload];
    },
    deletePost: (state, action) => {
      console.log(state)
      state.posts =  state.posts.filter((item) => item.id !== action.payload)
    },
  },
});
export const { createPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
