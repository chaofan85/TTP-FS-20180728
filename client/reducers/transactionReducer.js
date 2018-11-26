import { RECEIVE_RECORDS, RECEIVE_RECORD } from "../actions/transactionActions";
import merge from "lodash/merge";

const initialState = {};
const transactionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_RECORD:
      newState = merge({}, state, action.data);
      return newState;

    default:
      return state;
  }
};

export default transactionReducer;
