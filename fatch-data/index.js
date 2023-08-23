//  async action - api calling

const { default: axios } = require("axios");
const { applyMiddleware } = require("redux");
const { createStore } = require("redux");
const { default: thunk } = require("redux-thunk");

// api url -

// redux middleware - redux thunk

// axios api

// First state initalized

//Taking constrains

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";

const API_URL = `https://jsonplaceholder.typicode.com/todos`

const initialTodosState = {
      todos: [],
      isLoading: false,
      error: null,
}

/// Action

const getTodosRequest = () => {
      return {
            type: GET_TODOS_REQUEST,
      }
}
const getTodosFailed = (error) => {
      return {
            type: GET_TODOS_FAILED,
            payload: error
      }
}
const getTodosSuccess = (todos) => {
      return {
            type: GET_TODOS_SUCCESS,
            payload: todos
      }
}

//Reducer

const todosReducer = (state = initialTodosState, action) => {

      switch (action.type) {
            case GET_TODOS_REQUEST:
                  return {
                        ...state,
                        isLoading: true,
                  }
            case GET_TODOS_SUCCESS:
                  return {
                        ...state,
                        isLoading: false,
                        todos: action.payload
                  }
            case GET_TODOS_FAILED:
                  return {
                        ...state,
                        isLoading: false,
                        error: action.payload
                  }
            default:
                  return state;
      }
}

/// async action creator

const fetchData = () => {
      return (dispatch) => {
            dispatch(getTodosRequest())

            axios.get(API_URL)
                  .then(res => {
                        // console.log(res.data);
                        const todos = res.data

                        const titles = todos.map(todo => todo.title)
                        // console.log(titles);
                        dispatch(getTodosSuccess(titles));
                  })
                  .catch(error => {
                        const errorResult = error.message
                        dispatch(getTodosFailed(errorResult))
                  })
      }

}

// store

const store = createStore(todosReducer, applyMiddleware(thunk))

store.subscribe(() => {
      console.log(store.getState());
})

store.dispatch(fetchData())