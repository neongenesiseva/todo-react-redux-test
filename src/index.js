import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';
import { Provider } from 'react-redux';

import Container from './Components/Container';

function logger({ getState }){
    return next => action => {
        console.log('will disptach', action)
        let returnValue = next(action)
        console.log('state after dispatch',getState());
        return returnValue;
    }
}

export const store = createStore(rootReducer,applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
            <Container/>
        </div>
    </Provider>, 
    document.getElementById('root')
);
