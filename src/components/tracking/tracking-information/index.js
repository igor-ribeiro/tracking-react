import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTrackingInformation } from '../../../actions/tracking-actions';

import AppLoader from '../../app/app-loader';
import TrackingTable from '../tracking-table';
import TrackingError from '../tracking-error';

class TrackingInformation extends Component {
    render() {
        if (this.props.isLoading) {
            return <AppLoader />;
        }

        if (this.props.error) {
            return <TrackingError error={this.props.error} />;
        }

        return <TrackingTable information={this.props.information} code={this.props.params.trackingCode} />;
    }

    componentDidMount() {
        this.props.fetchTrackingInformation(this.props.params.trackingCode);
    }

    componentWillReceiveProps(props) {
        if (props.params.trackingCode === this.props.params.trackingCode) {
            return false;
        }

        this.props.fetchTrackingInformation(props.params.trackingCode);
    }
}

const mapStateToProps = (state) => {
    return { ...state.tracking };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTrackingInformation: (code) => {
            dispatch(fetchTrackingInformation(code));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackingInformation);
