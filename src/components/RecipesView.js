import React from 'react';
import Recipes from './Recipes';

const RecipesView = ({ children, selected }) => (
  <div className="main">

    <div className="pane">
      <Recipes selected={ selected } />
    </div>

    <div className="pane">
      { children }
    </div>

  </div>
);

export default RecipesView;