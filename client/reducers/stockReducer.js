import { combineReducers } from "redux";
import StockLookupReducer from "./stockLookupReducer";

const StockReducer = combineReducers({
  stockInfo: StockLookupReducer
});

export default StockReducer;
