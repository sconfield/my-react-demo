import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import { reducer } from './LearnRedux.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(reducer);
  const listener = ()=> ReactDOM.render(<App store={store} />, div);

  listener();
  store.subscribe(listener);
});
