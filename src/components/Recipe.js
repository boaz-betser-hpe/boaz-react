import React from 'react';

const Recipe = ({ title }) => (
  <li>{ title }</li>
);

Recipe.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Recipe;