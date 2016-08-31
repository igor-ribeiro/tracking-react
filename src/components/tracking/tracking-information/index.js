import React, { Component } from 'react';

import trackingApi from '../../../mocks/tracking-api';

import AppLoader from '../../app/app-loader';
import TrackingTable from '../tracking-table';
import TrackingError from '../tracking-error';

export default class TrackingInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '',
            information: [],
            error: '',
            isLoading: false,
        };
    }

    render() {
        if (this.state.isLoading) {
            return <AppLoader />;
        }

        if (this.state.error) {
            return <TrackingError error={this.state.error} />;
        }

        return <TrackingTable information={this.state.information} code={this.state.code} />;
    }

    componentDidMount() {
        this.fetchTrackingInformation(this.props.params.trackingCode);
    }

    componentWillReceiveProps(props) {
        this.fetchTrackingInformation(props.params.trackingCode);
    }

    fetchTrackingInformation = (code) => {
        if (code === this.state.code) {
            return false;
        }

        const information = trackingApi[code];

        this.setState({ isLoading: true });

        setTimeout(() => {
            if (information) {
                this.setState({ information, error: '' });
            } else {
                this.setState({ error: `No tracking information found for "${code}" code.`, information: [] });
            }

            this.setState({ isLoading: false, code });
        }, 2000);
    }
}
