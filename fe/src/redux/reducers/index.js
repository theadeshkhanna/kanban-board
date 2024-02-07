import { combineReducers } from "redux";
import storyReducer from "./story.reducer";

const appReducer = combineReducers({
  story: storyReducer,
});
const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
