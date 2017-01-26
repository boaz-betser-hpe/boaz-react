import { getID } from './lib/ids';
import reducer from './reducers/root';
import { createStore } from 'redux';

const initialState = {
  recipes: [
    { id: getID(), title: 'Waffles',  desc: 'Baked flour' ,favorite: false },
    { id: getID(), title: 'Omelette', desc: 'Two eggs', favorite: true },
    { id: getID(), title: 'Dog Food', desc: 'Very expensive', favorite: true }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;