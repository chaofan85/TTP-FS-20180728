import {
  RECEIVE_CURRENT_USER,
  login,
  signup,
  logout
} from "../actions/sessionActions.js";
import { UPDATE_CURRENT_USER } from "../actions/stockActions";
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

    default:
      return state;
  }
};

export default SessionReducer;
