import React, { Component } from 'react';

import './style.css';

export default class TrackingTable extends Component {
    render() {
        if (! this.props.information || ! this.props.information.length) {
            return null;
        }

        return (
            <table className="tracking-table">
                <thead className="tracking-table-header">
                    <tr>
                        <th colSpan="2">Tracking Code: {this.props.code}</th>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody className="tracking-table-body">
                    { this.props.information.map(renderTrackingInformationRows) }
                </tbody>
            </table>
        );
    }
}

function renderTrackingInformationRows (information, index) {
    return (
        <tr key={index}>
            <td>{ information.dateTime }</td>
            <td>{ information.description }</td>
        </tr>
    );
}
