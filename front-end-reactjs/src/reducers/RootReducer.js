import { UserReducer } from "./UserReducer";
import { AdminReducer } from "./AdminReducer";
import { combineReducers } from "redux";

// RootReducer contains all reducers
// other reducer is used by calling RootReducer
const RootReducer = combineReducers({
    account: UserReducer,
    admin: AdminReducer
});
export default RootReducer;