import { RECEIVE_STOCKS, UPDATE_STOCKS } from "../actions/stockActions";
import merge from "lodash/merge";

const initialState = {};
const stockReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_STOCKS:
      newState = merge({}, state, action.stocks);
      return newState;

    case UPDATE_STOCKS:
      let newStock = action.stock;
      newState = merge({}, state);
      newState[newStock.symbol] = newStock;
      return newState;

    default:
      return state;
  }
};

export default stockReducer;
