                                                      Necessity  of  Redux in React

Redux is an open-source JavaScript library for managing and centralising application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark. 

React redux is an advanced state management library for React. As we learned earlier, React only supports component level state management. In a big and complex application, a large number of components are used. React recommends moving the state to the top level component and passing the state to the nested component using properties. It helps to some extent but it becomes complex when the components increase.
React redux chips in and helps to maintain state at the application level. React redux allows any component to access the state at any time. Also, it allows any component to change the state of the application at any time.


Let us learn about how to write a React application using React redux in this documentation.

Concepts:
React redux maintains the state of the application in a single place called Redux store. React components can get the latest state from the store as well change the state at any time. Redux provides a simple process to get and set the current state of the current application and now describe these concepts below.

Store - The central place to store the state of the application


  const {createStore} = require("redux");


Action:
Action - Action is a plain object with the type of the action to be done and the input( called payload ) necessary to do the action. For example,  action for adding product and get product in the Redux store contains ADD_PRODUCT and GET_PRODUCT as type and an object with item’s details as payload. The action can be represented as -


const getProduct = (product) => {
    return {


        type: GET_PRODUCT,
        payload: product,
    }
}
const addProduct = (product) => {
    return {


        type: ADD_PRODUCT,
        payload: product,
    }
}

Reducer:
Reducer - Reducers are pure functions used to create a new state based on the existing state and the current action. It returns the newly created state. For example, in add product scenario, it creates a new product  list and merges the product from the state and new item and return the newly created list -


// Reducer - pure function - for product details


const productUpdateReducer = (state = intailProductState, action) => {


    switch (action.type) {




        case GET_PRODUCT:


            return {
                ...state,
            }
        case ADD_PRODUCT:


            return {
                user: [...state.products, action.payload],
                quantity: state.quantity + 1,
            }
        default:
            return state;
    }


}




Redux-Middleware


Middleware is some code you can put between the framework receiving a request, and the framework generating a response. For example, loggers help you with information about past, present and previous. The best feature of middleware is that it's composable in a chain. You can use multiple independent third-party middleware in a single project.People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

npm i redux-logger or yarn add redux-logger
const store = createStore(Reducer, applyMiddleware(logger))

Npm install redux-thunk or yarn add redux-thunk
const store = createStore(Reducer, applyMiddleware(thunk))

Redux with React
React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data. Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model.
npm install react-redux or yarn add react-redux
Create action - 
import { DECREMENT, INCREMENT, RESET } from "./Constrain"


export const incrementAction = () => {
      return {
            type: INCREMENT,
      }
}
Create Reducer -
import { DECREMENT, INCREMENT, RESET } from "./Constrain";


//Reducer -


const intialState = {
      count: 0,
}
const countingReducer = (state = intialState, action) => {


      switch (action.type) {
            case INCREMENT:
                  return {
                        ...state,
                        count: state.count + 1,
                  }
            case DECREMENT:
                  return {
                        ...state,
                        count: state.count - 1,
                  }
            case RESET:
                  return {
                        ...state,
                        count: 0,
                  }
            default:
                  return state;
      }
}


export default countingReducer

Create a store.js or store.jsx file into src folder:-
import { createStore } from 'redux'
import Reducer from './services/Reducer'
const store = createStore(Reducer);
export default store;

Provider component
React Redux provides a Provider component and its sole purpose is to make the Redux store available to its all nested components connected to the store using connect API. The sample code is given below −
import { Provider } from 'react-redux'
import store from './app/Store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

Now, all the components inside the App component can get access to the Redux store by using connect API.


To see the output on web-browser we have to use  ‘useDispatch’ from react-redux
 //to apply the action we need ‘usedispatch’ from react-redux
const dispatch = useDispatch();
  //react-redux return its state
      const counts = useSelector(state => state.count)


React fetch with Redux and ‘axios’
Fetching data using React, Redux, and Axios involves setting up Redux for state management, creating actions and reducers using Redux Toolkit, and utilising Axios to make asynchronous API calls. Here's a step-by-step guide:
At first we have to install -
npm install axios or yarn add axios and react-redux also.
Create action:-
import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constrains/TodosConstrains"
import axios from "axios"
const getAllTodos = () => async (dispatch) => {
      dispatch({ type: GET_TODOS_REQUEST })
try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
            dispatch({ type: GET_TODOS_SUCCESS, payload: res.data })
      }
      catch (error) {
            dispatch({ type: GET_TODOS_FAILED, payload: error.message })
      }
}
export default getAllTodos;
Create Reducer:-
//Define initial state


import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constrains/TodosConstrains";


const initialState = {
      todos: [],
      isLoading: false,
      error: null
}


const todosReducer = (state = initialState, action) => {


      switch (action.type) {
            case GET_TODOS_REQUEST:
                  return {
                        ...state,
                        isLoading: true,
                  }
            case GET_TODOS_SUCCESS:
                  return {
                        isLoading: false,
                        todos: action.payload,
                        error: null
                  }
            case GET_TODOS_FAILED:
                  return {
                        isLoading: false,
                        todos: [],
                        error: action.payload


                  }
            default:
                  return state;
      }
}


export default todosReducer;



Create store:-
import { applyMiddleware, createStore } from 'redux'
import todosReducer from './services/Reducer/TodosReducer'
import thunk from 'redux-thunk'


const store = createStore(todosReducer, applyMiddleware(thunk))


export default store;


To see the output on web-browser we have to use  ‘useDispatch’ from react-redux



 const { isLoading, todos, error } = useSelector((state) => state)
      console.log(isLoading);

      const dispatch = useDispatch()

      useEffect(() => {
            dispatch(getAllTodos())
      }, [])

Redux-Toolkit uses:
Redux Toolkit is a set of utilities and conventions designed to simplify the development of Redux applications. Redux is a predictable state container for JavaScript applications, commonly used with frameworks like React for managing the state of an application.
npm install @reduxjs/toolkit react-redux or yarn add npm install @reduxjs/toolkit react-redux 

Firstly you have to create a folder under src file and js or jsx filename should be written as a reduxSlice.js or reduxSlice.jsx
For counter:-
What is createSlice in Redux Toolkit?
CreateSlice is a higher order function that accepts an initial state, an object full of reducer functions and a slice name. It automatically generates action creators and action types that correspond to the reducers and state. In Redux-Toolkit, the createSlice method helps us create a slice of the redux-store. This function aims to reduce the boilerplate required to add data to redux in the canonical way. Internally, it uses createAction and createReducer.

import { createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({
      name: "counter",
      initialState: { count: 0 },
      reducers: {
            increment: (state) => {
                  state.count = state.count + 1
            },
            decrement: (state) => {
                  state.count = state.count - 1
            },
            reset: (state) => {
                  state.count = 0
            },
            increasedByValue: (state, actions) => {
                  state.count = state.count + actions.payload
            }
      }
})
export const { increment, decrement, reset, increasedByValue } = counterSlice.actions;


export default counterSlice.reducer;

For counter view:-
import { useDispatch, useSelector } from "react-redux";
import { decrement, increasedByValue, increment, reset } from "./CounterSlice";




const CounterView = () => {


      const count = useSelector(state => state.counter)
      console.log(count);


      const dispatch = useDispatch()


      return (
            <div>
                  <h4>This is counter App</h4>


                  <p>Count : {count.count}</p>
                  <button onClick={() => { dispatch(increment()) }}>Inrease</button>
                  <button onClick={() => { dispatch(decrement()) }}>Derease</button>
                  <button onClick={() => { dispatch(reset()) }}>Reset</button>
                  <button onClick={() => { dispatch(increasedByValue(10)) }}>value</button>
            </div>
      );
};


export default CounterView;

For using @redux-Toolkit you should create an App folder under src folder and keep the  store.js or store.jsx file under the App folder.

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/CounterSlice";
//this toolkit is used for store the data import from @reduxjs/toolkit
export const store = configureStore({
      reducer: {
             counter: counterReducer,
      }
})
Fetch Data using @redux-toolkit
This middleware ‘createAsyncThunk’ is used to fetch data, it will return a promise and it can create async action 
export const fetchPost = createAsyncThunk("posts/fetchPost", async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      return res.data;
})

Here fatchPost is a action name, use axios for data fetch
const postSlice = createSlice({
      name: "posts",
      initialState: {
            isLoading: false,
            posts: [],
            error: null
      },


      //To handle those promise/actions  we need extraReducer --- it can be pending, fulfilled and otherwise it will be rejected
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

For using @redux-Toolkit you should create an App folder under src folder and keep the  store.js or store.jsx file under the App folder.
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/PostsSlice";


//this toolkit is used for store the data import from @reduxjs/toolkit
export const store = configureStore({
      reducer: {
                 posts: postReducer,
}
})

Post View in web-browser:-
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./PostsSlice";




const PostsView = () => {
      //this build in fuction is used for getting data from redux provider import from react-redux
      const { posts, isLoading, error } = useSelector((state) => state.posts)
      console.log(posts);


      // A hook to access the redux dispatch function.


      // @returns — redux store's dispatch function
      //Call the fetchPost using dispatch
      const dispatch = useDispatch()


      useEffect(() => {
            dispatch(fetchPost())
      }, [])




      return (
            <div>
                  <h4>This is Post view App</h4>
                  <section>
                        {isLoading && <small>Loading.....</small>}
                        {error && <small>{error.message}</small>}
                        {posts && posts.map(post => {
                              return <article key={post.id}>
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                              </article>
                        })}
                  </section>
            </div>
      );
};


export default PostsView;


