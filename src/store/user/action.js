import * as types from './types';

export function userLogin() {
  return {
    type: types.USER_LOGIN,
  };
}

export function fakeLogout() {
  return {
    type: types.FAKE_LOGOUT,
  };
}
