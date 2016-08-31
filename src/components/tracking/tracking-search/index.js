import React, { Component } from 'react';

import './style.css';

export default class TrackingSearch extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleTrackingCodeSubmit} className="tracking-search">
                <input onChange={this.props.handleTrackingCodeChange} value={this.props.code} className="tracking-search-field" type="text" />
                <input className="tracking-search-button" value="Track" type="submit" />
            </form>
        );
    }
}

