import { combineReducers } from "redux";
import { reducer as loginReducer } from '../module/Login';

const combinedReducers = combineReducers({
    Loginmenu: loginReducer,
  });
  const rootReducer = (state, action) => {
    
    return combinedReducers(state, action);
  };
  
  export default rootReducer;