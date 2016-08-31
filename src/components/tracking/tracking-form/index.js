import React, { Component } from 'react';

import './style.css';

class TrackingForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="tracking-search">
                <input onChange={this.props.handleChange} value={this.props.code} className="tracking-search-field" type="text" />
                <input className="tracking-search-button" value="Track" type="submit" />
            </form>
        );
    }
}

export default TrackingForm;
