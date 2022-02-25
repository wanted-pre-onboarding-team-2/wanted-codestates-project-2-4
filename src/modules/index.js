import { combineReducers } from "redux";

import contents from "./contents";
import tab from "./tab";

const rootReducer = combineReducers({
  contents,
  tab,
});

export default rootReducer;
