import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTrackingCode } from '../../../actions/tracking-actions';

import history from '../../../history';

import TrackingForm from '../tracking-form';

class TrackingSearch extends Component {
    render() {
        return (
            <TrackingForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} code={this.props.code} />
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.props.handleTrackingCodeSearch(this.props.code);
    }

    handleChange = (event) => {
        this.props.handleTrackingCodeChange(event.target.value);
    }
}

const mapStateToProps = (state) => {
    return {
       code: state.tracking.code,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleTrackingCodeChange: (code) => {
            dispatch(updateTrackingCode(code));
        },
        handleTrackingCodeSearch: (code) => {
            history.push(code);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackingSearch);
