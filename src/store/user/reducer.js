import * as types from './types';

const initState = {
  loggedIn: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        loggedIn: true,
      };
    case types.FAKE_LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};
