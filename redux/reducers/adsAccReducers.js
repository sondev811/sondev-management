import {ADD_ADS_ACC} from '../actions/adsAccAction';
const initialState = {
  list: []
};
const adsAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADS_ACC:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
export default adsAccountReducer;
