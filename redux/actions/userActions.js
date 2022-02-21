//Action Types
export const SET_USER = "SET_USER";

export const setUserAction = (user) => {
  return {
    type: SET_USER,
    payload: user
  };
};

