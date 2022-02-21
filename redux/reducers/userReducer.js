import {SET_USER} from '../actions/userActions';

const initialState = {
  accessToken: null,
  data_access_expiration_time: null,
  email: null,
  expiresIn: null,
  graphDomain: null,
  id: null,
  name: null,
  picture: null,
  signedRequest: null,
  userID: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
export default userReducer;