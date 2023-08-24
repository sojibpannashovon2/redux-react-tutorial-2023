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

export default countingReducer;