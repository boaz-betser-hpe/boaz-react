import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = () => (
  <h1>Recipes:</h1>
);

const Recipe = ({ title }) => (
  <li>{ title }</li>
);

class Recipes extends React.Component {

  constructor() {
    super();

    this.state = {
      recipes: [
        'Waffles', 'Omelette', 'Pancake'
      ]
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('Yey!! ' + this.title.value);

    this.setState({
      recipes: this.state.recipes.concat(this.title.value)
    });

    this.title.value = '';
  };

  render() {
    return (
      <div>
        <ul>
          {
            this.state.recipes.map(recipe => <Recipe
              title={ recipe }
              key={ recipe }/>)
          }
        </ul>

        <form onSubmit={ this.handleSubmit }>
          <input ref={ (elem) => this.title = elem } type="text"/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

const App = () => (
  <div>
    <div>
      <Header />
      <Recipes />
    </div>
  </div>
);

window.App = App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
