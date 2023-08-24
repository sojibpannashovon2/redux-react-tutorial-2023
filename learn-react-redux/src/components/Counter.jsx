import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction, resetAction } from "../services/ActionReducer";


const Counter = () => {

      //to apply the action we need usedispatch from react-redux

      const dispatch = useDispatch();

      //react-reudux return its state
      const counts = useSelector(state => state.count)
      console.log(counts);
      const handleCountIncrease = () => {
            dispatch(incrementAction())
      }
      const handleCountDecrease = () => {
            dispatch(decrementAction())
      }
      const handleCountReset = () => {
            dispatch(resetAction())
      }
      return (
            <div>
                  <h4>This is Counter APP</h4>
                  <p>Count: {counts}</p>

                  <button onClick={handleCountIncrease}>Increase</button>
                  <button onClick={handleCountDecrease}>Decrease</button>
                  <button onClick={handleCountReset}>Reset</button>
            </div>
      );
};

export default Counter;