// Action creation

import { DECREMENT, INCREMENT, RESET } from "./Constrain"

export const incrementAction = () => {
      return {
            type: INCREMENT,
      }
}
export const decrementAction = () => {
      return {
            type: DECREMENT,
      }
}
export const resetAction = () => {
      return {
            type: RESET,
      }
}