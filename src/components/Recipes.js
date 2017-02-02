import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Recipes = ({ recipes, selected }) => (
  <ul className="recipes">
    { recipes.map(recipe =>
      <Recipe key={ recipe.id }
              recipe={ recipe }
              selected={ recipe.id === selected }
      />)
    }
    <li>
      <Link to="/">Add Recipe</Link>
    </li>
  </ul>
);

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  selected: React.PropTypes.number
};

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps)(Recipes);