import React from 'react';

class AddRecipe extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.cb(this.title.value);
    this.title.value = '';
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input ref={ (elem) => this.title = elem } type="text"/>
        <button>Add</button>
      </form>
    );
  }
}

AddRecipe.propTypes = {
  cb: React.PropTypes.func.isRequired
};

export default AddRecipe;