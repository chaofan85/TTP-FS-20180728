import { RECEIVE_STOCK_INFO } from "../actions/stockActions";
import merge from "lodash/merge";

const initialState = {};

const StockLookupReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_STOCK_INFO:
      return merge({}, state, action.stock);

    default:
      return initialState;
  }
};

export default StockLookupReducer;
