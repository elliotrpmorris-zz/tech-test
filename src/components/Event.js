import React, { Component } from 'react';

class Event extends Component {
    render() {
        return (
            <div>
                <p>{this.props.event.name}</p>
            </div>
        );
    }
}

export default Event;