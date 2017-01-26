import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const Recipe = ({ recipe, toggleFavorite, selected }) => (
  <li className={ classNames('recipe', { 'favorite': selected }) }>
    <Link to={ `/recipe/${ recipe.id }` }>
      { recipe.title }
    </Link>
  </li>
);

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired,
  selected: React.PropTypes.bool
};

export default Recipe;