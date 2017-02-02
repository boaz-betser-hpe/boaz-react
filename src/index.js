import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './components/App';
import AddRecipe from './components/AddRecipe';
import store from './store';
import RecipeDetails from './components/RecipeDetails';

const NotFound = () => (
  <div>
    <h1>Are you lost</h1>
    <Link to="/legal">Go to legal</Link>
  </div>
);

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>

      <Route path="/" component={ App }>
        <IndexRoute component={ AddRecipe } />
        <Route path="recipe/:id" components={ RecipeDetails }/>
        <Route path="*" component={ NotFound } />
      </Route>

    </Router>
  </Provider>,
  document.getElementById('root')
);