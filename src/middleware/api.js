import { SET_RECIPES } from '../consts/action-types';

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type === 'FETCH_RECIPES') {

    return fetch('https://s3.amazonaws.com/500tech-shared/recipes.json')
      .then(response => response.json())
      .then(data => dispatch({ type: SET_RECIPES, data }))
      .catch(error => console.log(`Network error:`, error));
  }

    return next(action);

};

export default apiMiddleware;