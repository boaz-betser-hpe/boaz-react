const logMiddleware = ({ getState, dispatch }) => next => action => {
  console.log(`ACTION: ${ action.type }`, action);

  next(action);
};

export default logMiddleware;
