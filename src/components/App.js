import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipes';

import RecipesView from './RecipesView';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  componentWillMount() {
    this.props.fetchRecipes();
  }

  render() {
    const { children, params } = this.props;

    return (
      <div>
        <Header />
        <RecipesView children={ children }
                     selected={ parseInt(params.id, 10) }/>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  fetchRecipes: React.PropTypes.func.isRequired
};

export default connect(null, { fetchRecipes })(App);