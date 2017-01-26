import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import RecipesView from './components/RecipesView';
import Header from './components/Header';
import Footer from './components/Footer';
import store from './store';

const App = ({ children }) => (
  <div>
    <Header />
    { children }
    <Footer />
  </div>
);

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
        <IndexRoute component={ RecipesView } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
