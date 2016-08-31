import React from 'react';

import './style.css';

import AppTitle from './app-title';
import AppSeparator from './app-separator';
import TrackingSearch from '../tracking/tracking-search';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trackingCode: '',
        };
    }

    render() {
        return (
            <div className="app">
                <AppTitle title="Tracking - React" />

                <AppSeparator />
                <TrackingSearch code={this.state.trackingCode} handleTrackingCodeChange={this.handleTrackingCodeChange} handleTrackingCodeSubmit={this.handleTrackingCodeSubmit}/>
                <AppSeparator />

                {this.props.children}
            </div>
        );
    }

    handleTrackingCodeChange = (event) => {
        this.setState({ trackingCode: event.target.value });
    }

    handleTrackingCodeSubmit = (event) => {
        event.preventDefault();

        this.context.router.push(this.state.trackingCode);
    }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired,
}

export default App;
