import { SET_NAME } from '../consts/action-types';

export const setName = (name) => ({
  type: SET_NAME,
  payload: name
});