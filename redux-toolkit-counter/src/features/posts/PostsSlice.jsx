import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

//featch post using thunk middleware(createAsyncThunk) and axios from redux-toolkit
//How to data fetch data and passing through redux-toolkit reducer
//It will return a promise
//Here fatchPost is action name
//async action create 
export const fetchPost = createAsyncThunk("posts/fetchPost", async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      return res.data;
})

//https://jsonplaceholder.typicode.com/posts

const postSlice = createSlice({
      name: "posts",
      initialState: {
            isLoading: false,
            posts: [],
            error: null
      },

      //To handle those promise/actions  we need extraReducer --- it can be pending, fullfilled and otherwise it will be rejected
      extraReducers: (builder) => {
            builder.addCase(fetchPost.pending, (state) => {
                  state.isLoading = true;
            })
            builder.addCase(fetchPost.fulfilled, (state, action) => {
                  state.isLoading = false;
                  state.posts = action.payload;
                  state.error = null;

            })
            builder.addCase(fetchPost.rejected, (state, action) => {
                  state.isLoading = false;
                  state.posts = [];
                  state.error = action.error.message;

            })

      }

})

export default postSlice.reducer;