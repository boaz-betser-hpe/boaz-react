import { ADD_RECIPE, TOGGLE_RECIPES } from '../consts/action-types';
import { getID } from '../lib/ids';

const reducer = (state, action) => {
  console.log("Got Action " + action.type, action);

  switch (action.type) {
    case ADD_RECIPE:
      const newRecipe = {
        id: getID(),
        title: action.title,
        favorite: false
      };

      const newRecipes = state.recipes.concat(newRecipe);

      return Object.assign({}, state, {
        recipes: newRecipes
      });

    case TOGGLE_RECIPES:
      const updateList = state.recipes.map(recipe => recipe.id !== action.id
        ? recipe
        : Object.assign({}, recipe, { favorite: !recipe.favorite }))

      return Object.assign({}, state, {
        recipes: updateList
      });

    default:
      return state;
  }
};

export default reducer;