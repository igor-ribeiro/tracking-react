import React from 'react';

import './style.css';

import AppTitle from './app-title';
import AppSeparator from './app-separator';
import TrackingSearch from '../tracking/tracking-search';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <AppTitle title="Tracking - React" />

                <AppSeparator />
                <TrackingSearch />
                <AppSeparator />

                {this.props.children}
            </div>
        );
    }
}

export default App;
