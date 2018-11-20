import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  REMOVE_ERRORS
} from "../actions/sessionActions";
import merge from "lodash/merge";

const initialState = [];
const SessionErrorsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    case REMOVE_ERRORS:
      return [];
    default:
      return state;
  }
};

export default SessionErrorsReducer;
