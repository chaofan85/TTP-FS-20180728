import { RECEIVE_STOCKS, RECEIVE_STOCK } from "../actions/stockActions";
import merge from "lodash/merge";

const initialState = {};
const stockReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_STOCKS:
      newState = merge({}, state, action.stocks);
      return newState;

    case RECEIVE_STOCK:
      let newStock = action.stock;
      newState = merge({}, state);
      newState[newStock.symbol] = newStock;
      return newState;

    default:
      return state;
  }
};

export default stockReducer;
