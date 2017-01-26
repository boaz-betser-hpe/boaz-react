import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const Recipe = ({ recipe, toggleFavorite }) => (
  <li className={ classNames('recipe', { 'favorite': recipe.favorite }) }>
    <Link to={ `/recipe/${ recipe.id }` }>
      { recipe.title }
    </Link>
  </li>
);

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired
};

export default Recipe;