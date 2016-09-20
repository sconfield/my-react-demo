import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './App';
import { reducer } from './LearnRedux.jsx';
import './index.css';

//ReactDOM.render(<App/>, document.getElementById('root'));

const store = createStore(reducer);
const listener = function(){
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};
listener();
store.subscribe(listener);
