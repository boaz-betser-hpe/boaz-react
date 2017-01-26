import React from 'react';
import { connect } from 'react-redux';

const RecipeDetails = ({ recipe }) => (
  <div className="details">
    <h3>{ recipe.title }</h3>
    <div>
      <h4>Description</h4>
      { recipe.desc }
    </div>
  </div>
);

const RecipeDetailsWrapper = (props) => (
  props.recipe ? RecipeDetails(props) : <h3>Not found</h3>
);

RecipeDetails.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.find(recipe => recipe.id === parseInt(ownProps.params.id, 10))
});

export default connect(mapStateToProps)(RecipeDetailsWrapper);