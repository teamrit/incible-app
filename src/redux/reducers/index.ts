import { combineReducers } from "redux";
import incident from "./incidents.reducer";
import user from "./user.reducer";

const rootReducer = combineReducers({ incident , user});

export default rootReducer;