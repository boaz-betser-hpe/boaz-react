import { FETCH_RECIPES } from '../consts/action-types';
import { setRecipes } from '../actions/recipes';

const apiMiddle = ({ getState, dispatch }) => next => action => {

  if (action.type === FETCH_RECIPES) {
    fetch('https://s3.amazonaws.com/500tech-shared/recipes.json')
      .then(response => response.json())
      .then(data => dispatch(setRecipes(data.recipes)))
      .catch(error => console.log(`Error: `, error));
  }

  next(action);
};

export default apiMiddle;