import { combineReducers } from "redux";
import ErrorsReducer from "./errorsReducer";
import SessionReducer from "./sessionReducer";
import StockReducer from "./stockReducer";

const RootReducer = combineReducers({
  session: SessionReducer,
  stock: StockReducer,
  errors: ErrorsReducer
});

export default RootReducer;
