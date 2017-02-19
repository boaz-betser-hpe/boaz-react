import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header';
import Recipes from './components/Recipes';
import AddRecipe from './components/AddRecipe';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      recipes: [
        'Waffles', 'Omelette', 'Pancake'
      ]
    };
  }

  addRecipe = (title) => {
    this.setState({
      recipes: this.state.recipes.concat(title)
    });
  };

  render() {
    return (
      <div>
        <div>
          <Header total={ this.state.recipes.length } />
          <Recipes recipes={ this.state.recipes } />
          <AddRecipe cb={ this.addRecipe } />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
