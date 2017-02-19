import React from 'react';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => (
  <div>
    <ul>
      {
        recipes.map(recipe => <Recipe
          title={ recipe }
          key={ recipe }/>)
      }
    </ul>
  </div>
);

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired
};

export default Recipes;