import { combineReducers } from "redux";
import incidents from "./incidents.reducer";

const rootReducer = combineReducers({ incidents });

export default rootReducer;