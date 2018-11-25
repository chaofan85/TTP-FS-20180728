import { combineReducers } from "redux";
import ErrorsReducer from "./errorsReducer";
import SessionReducer from "./sessionReducer";
import StockReducer from "./stockReducer";
import TransactionReducer from "./transactionReducer";

const RootReducer = combineReducers({
  session: SessionReducer,
  stocks: StockReducer,
  transactions: TransactionReducer,
  errors: ErrorsReducer
});

export default RootReducer;
