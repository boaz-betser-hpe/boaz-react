import { ADD_RECIPE, TOGGLE_RECIPES } from '../consts/action-types';

const reducer = (state, action) => {
  console.log("Got Action " + action.type, action);

  switch (action.type) {
    case ADD_RECIPE:
      const newRecipe = Object.assign({}, action.payload, {
        favorite: false
      });

      const newRecipes = state.recipes.concat(newRecipe);

      return Object.assign({}, state, {
        recipes: newRecipes
      });

    case TOGGLE_RECIPES:
      const updateList = state.recipes.map(recipe => recipe.id !== action.payload
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