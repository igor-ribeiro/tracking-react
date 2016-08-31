import React, { Component } from 'react';

import './style.css';

export default class AppTitle extends Component {
    render() {
        return <h1 className="app-title">{ this.props.title || 'App Title' }</h1>;
    }
}
