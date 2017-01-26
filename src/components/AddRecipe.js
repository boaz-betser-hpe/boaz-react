import React from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipes';
import { browserHistory } from 'react-router';
import { getID } from '../lib/ids';

class AddRecipe extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    const id = getID();

    this.props.addRecipe(
      id,
      this.title.value,
      this.desc.value
    );

    this.title.value = '';
    this.desc.value = '';

    browserHistory.push(`/recipe/${ id }`);
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <input ref={ e => this.title = e } type="text"/>
        <textarea ref={ e => this.desc = e } />
        <button>Add</button>
      </form>
    );
  }
}

AddRecipe.propTypes = {
  addRecipe: React.PropTypes.func.isRequired
};

export default connect(null, { addRecipe })(AddRecipe);