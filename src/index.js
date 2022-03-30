import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore } from 'redux';
import About from './component/About';
import App from './component/App';
import Navbar from './component/Navbar';
import NewApp from './component/NewApp';
import { counterReducer } from './reducer/counterReducer';
import mathReducer from './reducer/mathReducer';
import combineReducers from './reducer/mathReducer';

// const store = createStore(counterReducer);
const store = createStore(mathReducer);

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>, 
    
document.getElementById('root'));