import { SET_NAME } from '../consts/action-types';

const initialState = {
  name: 'Kipi'
};

const reducer = (user = initialState, action) => {
  switch (action.type) {

    case SET_NAME:
      return Object.assign({}, user, {
        name: action.payload
      });

    default:
      return user;
  }
};

export default reducer;