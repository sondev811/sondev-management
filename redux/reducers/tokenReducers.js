import {ADD_TOKEN} from '../actions/tokenAction';
const initialState = {
  token: ''
};
const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
export default tokenReducer;
