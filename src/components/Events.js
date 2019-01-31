import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* Styles */
const Table = styled.div`
  display: table;
  width: 100%;
`;

const TableBody = styled.div`
  display: table-row-group;
`;

const TableRow = styled.div`
  display: table-row;
`;

const TableCell = styled.div`
  border: 1px solid #999999;
  display: table-cell;
  padding: 10px;
`;

class Events extends Component {
  constructor() {
    super()
    this.state = {
      liveEvents: [],
    }
  }

  componentDidMount() {
    /* Create websocket connection */
    const w = new WebSocket("ws://localhost:8889");
    w.onopen = () => {
      /* Subscribe to live events */
      w.send(JSON.stringify({ type: "getLiveEvents", primaryMarkets: true }));
      w.onmessage = (event) => {
        /* Set state with the response data from the web socket */
        this.setState({ liveEvents: JSON.parse(event.data) })
      }
    }
  }

  render() {
    if (this.state.liveEvents.data && Array.isArray(this.state.liveEvents.data)) {
      /* Loop through each event and return it as var so it can be rendered to the screen */
      var eventList = this.state.liveEvents.data.map(function (event) {
        return <TableRow key={event.eventId}>
          <TableCell><Link to={`/live-events/${event.eventId}`}>{event.name}</Link></TableCell>
        </TableRow>;
      })
    }

    return (
      <div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Live Events</TableCell>
            </TableRow>
            {eventList}
          </TableBody>
        </Table>
      </div>
    )
  }
}
export default Events