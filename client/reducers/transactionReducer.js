import { RECEIVE_RECORDS, RECEIVE_RECORD } from "../actions/transactionActions";
import { RECEIVE_CURRENT_USER } from "../actions/sessionActions.js";
import merge from "lodash/merge";

const initialState = {};
const transactionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_RECORD:
      let newRecord = { [action.data.id]: action.data };
      newState = merge({}, state, newRecord);
      return newState;

    case RECEIVE_RECORDS:
      return merge({}, action.transactions);

    case RECEIVE_CURRENT_USER:
      if (!action.user) {
        return {};
      }
      return merge({}, state);

    default:
      return state;
  }
};

export default transactionReducer;
