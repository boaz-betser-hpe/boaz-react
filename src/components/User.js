import React from 'react';
import { connect } from 'react-redux';

const User = ({ name }) => (
  <span>{ name }</span>
);

User.propTypes = {
};

const mapStateToProps = state => ({
  name: state.user.name
});

export default connect(mapStateToProps)(User);