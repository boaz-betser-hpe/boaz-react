import { ADD_RECIPE, TOGGLE_RECIPES, SET_RECIPES } from '../consts/action-types';

export const addRecipe = (id, title, desc) => ({
  type: ADD_RECIPE,
  payload: {
    id,
    title: title.trim(),
    desc: desc.trim()
  }
});

export const toggleFavorite = (id) => ({
  type: TOGGLE_RECIPES,
  payload: id
});

export const setRecipes = (payload) => ({
  type: SET_RECIPES,
  payload
});