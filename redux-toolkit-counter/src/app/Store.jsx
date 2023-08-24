import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/CounterSlice";
import postReducer from "../features/posts/PostsSlice";


//this toolkit is used for store the data import from @reduxjs/toolkit
const store = configureStore({
      reducer: {
            posts: postReducer,
            counter: counterReducer,
      }
})

export default store; 