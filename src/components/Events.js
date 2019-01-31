import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
class Events extends Component {
  constructor() {
    super()
    this.state = {
      liveEvents: [],
    }
  }

  componentDidMount() {
    const w = new WebSocket("ws://localhost:8889");
    w.onopen = () => {
      w.addEventListener("message", e => (console.log(JSON.parse(e.data))));
      w.send(JSON.stringify({ type: "getLiveEvents", primaryMarkets: true }));
      w.onmessage = (event) => {
        this.setState({ liveEvents: JSON.parse(event.data) })
      }
    }
    // setInterval( _ =>{
    //   w.send(JSON.stringify({ type: "getLiveEvents", primaryMarkets: true }));
    // },2000 )
  }

  render() {
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

    if (this.state.liveEvents.data && Array.isArray(this.state.liveEvents.data)) {
      console.log(this.state.liveEvents.data);
      var eventList = this.state.liveEvents.data.map(function (event) {
        return <TableRow key={event.eventId}>
          <TableCell><Link to={`/event/${event.eventId}`}>{event.name}</Link></TableCell>
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