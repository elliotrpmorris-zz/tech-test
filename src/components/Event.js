import React, { Component } from 'react'
import styled from 'styled-components';

class Event extends Component {
    constructor() {
        super()
        this.state = {
            liveEvents: [],
        }
    }

    render() {

        return (
            <div>
                {/* <TableCell>{event.startTime}</TableCell>
				// 	<TableCell>{event.competitors[0].name}</TableCell>
				// 	<TableCell>{event.scores.home}</TableCell>
				// 	<TableCell>{event.scores.away}</TableCell>
				// 	<TableCell>{event.competitors[1].name}</TableCell> */}
            </div>
        )
    }
}
export default Event