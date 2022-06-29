import * as actionTypes from './actionType';



const INITIAL_STATE = {
   userDetail:[]

  };
  console.log('first', INITIAL_STATE.userDetail)
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case actionTypes.GET_DETAIL:
        debugger
        return {
          userDetail:[...state.userDetail,action.payload]
        };
      default:
        return state;
    }
  };
  