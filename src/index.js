import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import { reducer } from './LearnRedux.jsx';
import './index.css';

const root = document.getElementById('root');
const store = createStore(reducer);
const listener = ()=> ReactDOM.render(<App store={store} />, root);

listener();
store.subscribe(listener);
