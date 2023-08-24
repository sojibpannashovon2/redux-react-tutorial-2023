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