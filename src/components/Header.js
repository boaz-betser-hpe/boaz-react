import React from 'react';

const Header = ({ total }) => (
  <h1>Recipes ({ total }):</h1>
);

Header.propTypes = {
  total: React.PropTypes.number.isRequired
};

export default Header;

