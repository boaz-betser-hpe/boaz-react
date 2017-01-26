import { ADD_RECIPE, TOGGLE_RECIPES } from '../consts/action-types';

export const addRecipe = (title) => ({
  type: ADD_RECIPE,
  title: title.trim()
});

export const toggleFavorite = (id) => ({
  type: TOGGLE_RECIPES,
  id
});