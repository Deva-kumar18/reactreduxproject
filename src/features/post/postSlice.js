import { createSlice, nanoid,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const POST_URL = "https://jsonplaceholder.typicode.com/posts"

const initialState = {
  posts:[],
  status:"idle",
  error:null
};
export const fetchPosts = createAsyncThunk('posts/fetchPosts',async()=>{
  const response = await axios.get(POST_URL)
  return response.data
})

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, body) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
            
          },
        };
      },
    },
   
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
  
  
});

export const { addPost } = postsSlice.actions;
export const postStatus = (state)=>state.posts.status
export const getError = (state)=>state.posts.error
export const selectAllPosts = (state) => state.posts.posts;
export default postsSlice.reducer;
