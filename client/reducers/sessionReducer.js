import {
  RECEIVE_CURRENT_USER,
  login,
  signup,
  logout
} from "../actions/sessionActions.js";
import { UPDATE_CURRENT_USER } from "../actions/stockActions";
import { RECEIVE_RECORD } from "../actions/transactionActions";
import { RECEIVE_STOCK } from "../actions/stockActions";
import merge from "lodash/merge";

const initialState = {};
const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, state, { currentUser: action.user });
      return newState;

    case UPDATE_CURRENT_USER:
      return merge({}, state, { currentUser: action.user });

    case RECEIVE_STOCK:
      let newStock = action.stock;
      newState = merge({}, state);
      newState.currentUser.stocks[newStock.symbol] = newStock;

      return newState;

    case RECEIVE_RECORD:
      let newRecord = { [action.data.id]: action.data };
      newState = merge({}, state);
      merge(newState.currentUser.transactions, newRecord);
      // console.log("newRecord", newRecord);
      // console.log(newState, "lalala");
      return newState;

    default:
      return state;
  }
};

export default SessionReducer;
