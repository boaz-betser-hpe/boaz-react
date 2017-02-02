import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const Recipe = ({ recipe, selected }) => (
  <li className={ classNames('recipe', { 'selected': selected, 'favorite': recipe.favorite }) }>
    <Link to={ `/recipe/${ recipe.id }` }>
      { recipe.title }
    </Link>
  </li>
);

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  selected: React.PropTypes.bool
};

export default Recipe;