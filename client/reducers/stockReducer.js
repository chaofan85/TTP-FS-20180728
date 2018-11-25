import { RECEIVE_STOCKS } from "../actions/stockActions";
import merge from "lodash/merge";

const initialState = {};
const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_STOCKS:
      let newState = merge({}, state, { currentUser: action.stocks });
      return newState;

    default:
      return state;
  }
};

export default stockReducer;
