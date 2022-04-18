import * as types from './types';

export function fakeLogin() {
  return {
    type: types.FAKE_LOGIN,
  };
}

export function fakeLogout() {
  return {
    type: types.FAKE_LOGOUT,
  };
}
