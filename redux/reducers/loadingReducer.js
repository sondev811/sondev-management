import {LOADING} from '../actions/loadingAction';
const initialState = {
  isLoading: true,
};
const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
export default loadingReducer;
