import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/recipes';
import { Link } from 'react-router';

const Recipes = ({ recipes, toggleFavorite }) => (
  <ul className="recipes">
    { recipes.map(recipe =>
      <Recipe key={ recipe.id }
              recipe={ recipe }
              toggleFavorite={ toggleFavorite } /> )}

    <li>
      <Link to="/">Add Recipe</Link>
    </li>
  </ul>
);

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps, { toggleFavorite })(Recipes);