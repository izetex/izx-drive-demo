
import React, { Component } from 'react';

import './LogTable.css';

const util = require('util');

function EventList(props) {
    const listItems = props.eventList.map((event) =>
        <tr key={event.id} className={event.content.success ? (event.content.async ? 'bg-info' : 'bg-success') : 'bg-warning'}>
            <td>{event.id}</td>
            <td>{new Date(event.content.start_at).toLocaleTimeString()}</td>
            <td>{event.content.duration} ms {event.content.async ? 'async' : ''}</td>
            <td>{event.content.object}.{event.content.method}</td>
            <td>{util.inspect(event.content.args)}</td>
            <td>{util.inspect(event.content.result)}</td>
        </tr>
    );
    return listItems;
};

class LogTable extends Component {

    render() {
        var eventList = this.props.eventList;
        return <table className="table table-stripped table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Duration</th>
                    <th>Call</th>
                    <th>Args</th>
                    <th>Response</th>
                </tr>
            </thead>
            <tbody>
                <EventList eventList={eventList} />
            </tbody>
        </table>
    }

}

export default LogTable;