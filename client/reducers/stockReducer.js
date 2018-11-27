import { RECEIVE_STOCKS, RECEIVE_STOCK } from "../actions/stockActions";
import { RECEIVE_CURRENT_USER } from "../actions/sessionActions.js";
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

    case RECEIVE_CURRENT_USER:
      if (!action.user) {
        return {};
      }
      return merge({}, state);

    default:
      return state;
  }
};

export default stockReducer;
