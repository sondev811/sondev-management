export const ADD_TOKEN = 'ADD_TOKEN';
export const setTokenAction = (token) => {
  return {
    type: ADD_TOKEN,
    payload: token
  };
};
