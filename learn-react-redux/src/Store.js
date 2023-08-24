
import { createStore } from 'redux'
import countingReducer from './services/Reducer'

const store = createStore(countingReducer);


export default store;