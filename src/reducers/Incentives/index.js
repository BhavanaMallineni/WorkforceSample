import * as Types from "../../actions/types";


const initialUserObj = {
  incTransList:[],
}

const handleIncentiveListReceived = (state, action) => {
  let newState = {...state};
  newState = Object.assign({}, state, { incTransList: Object.assign([], Object.values(action.response)) });
  return {...newState};
}

export default (state = initialUserObj, action) => {
    switch(action.type){
      case Types.GET_INCENTIVE_TRANSACTIONS_LIST :
           return { ...state};
      case Types.GET_INCENTIVE_TRANSACTIONS_LIST_SUCCESS_RESPONSE :
           //return { ...state,   incTransList: Object.assign([], Object.values(action.response))};
           return handleIncentiveListReceived(state, action);
      case Types.CREATE_NEW_INCENTIVE_TRANSACTION :
           return { ...state};
      case Types.CREATE_NEW_INCENTIVE_TRANSACTION_SUCCESS_RESPONSE :
           return { ...state};
      case Types.UPDATE_INCENTIVE_TRANSACTION :
           return { ...state};
      case Types.UPDATE_INCENTIVE_TRANSACTION_SUCCESS_RESPONSE :
           return { ...state};
      default :
            return { ...state};
    }
}
