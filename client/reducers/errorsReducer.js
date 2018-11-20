import { combineReducers } from "redux";
import SessionErrorsReducer from "./sessionErrorsReducer";

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer
});

export default ErrorsReducer;
