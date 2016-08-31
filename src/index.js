import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import { Router, Route, useRouterHistory } from 'react-router';

import App from './components/app';
import TrackingInformation from './components/tracking/tracking-information';

import './index.css';

const history = useRouterHistory(createHashHistory)({ queryKey: false });

const Routes = () => {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path=":trackingCode" component={TrackingInformation} />
            </Route>
        </Router>
    );
}

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
