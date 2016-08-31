import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import appReducer from './reducers/app-reducer';
import history from './history';

import App from './components/app';
import TrackingInformation from './components/tracking/tracking-information';

import './index.css';

const store = createStore(appReducer, applyMiddleware(thunkMiddleware));

const Routes = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <Route path=":trackingCode" component={TrackingInformation} />
                </Route>
            </Router>
        </Provider>
    );
}

ReactDOM.render(<Routes />, document.getElementById('root'));
