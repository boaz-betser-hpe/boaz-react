import { ADD_RECIPE, TOGGLE_RECIPES, SET_RECIPES } from '../consts/action-types';
import { getID } from '../lib/ids';

const initialState = [
  { id: getID(), title: 'Waffles',  desc: 'Baked flour' ,favorite: false },
  { id: getID(), title: 'Omelette', desc: 'Two eggs', favorite: true },
  { id: getID(), title: 'Dog Food', desc: 'Very expensive', favorite: true }
];

const reducer = (recipes = initialState, action) => {
  switch (action.type) {

    case ADD_RECIPE:
      const newRecipe = Object.assign({}, action.payload, {
        favorite: false
      });

      return recipes.concat(newRecipe);

    case TOGGLE_RECIPES:
      return recipes.map(
        recipe => recipe.id !== action.payload
          ? recipe
          : Object.assign({}, recipe, { favorite: !recipe.favorite })
      );

    case SET_RECIPES:
      return action.payload;

    default:
      return recipes;
  }
};

export default reducer;










