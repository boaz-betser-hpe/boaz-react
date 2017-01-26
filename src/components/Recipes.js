import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/recipes';
import { Link } from 'react-router';

const Recipes = ({ recipes, toggleFavorite, selected }) => (
  <ul className="recipes">
    { recipes.map(recipe =>
      <Recipe key={ recipe.id }
              recipe={ recipe }
              selected={ recipe.id === selected }
              toggleFavorite={ toggleFavorite } /> )}

    <li>
      <Link to="/">Add Recipe</Link>
    </li>
  </ul>
);

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired,
  selected: React.PropTypes.number
};

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps, { toggleFavorite })(Recipes);