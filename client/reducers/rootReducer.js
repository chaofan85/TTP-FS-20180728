import { combineReducers } from "redux";
import ErrorsReducer from "./errorsReducer";
import SessionReducer from "./sessionReducer";

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer
});

export default RootReducer;
