import * as actions from '../consts/action-types';

export const addRecipe = (title, desc, favorite = false) => ({
  type: actions.ADD_RECIPE,
  title: title.trim(),
  desc: desc.trim(),
  favorite
});

export const toggleFavorite = (id) => ({
  type: actions.TOGGLE_FAVORITE,
  id
});