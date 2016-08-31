import React, { Component } from 'react';

export default class TrackingError extends Component {
    render() {
        return <div>{this.props.error}</div>
    }
}
