import React, { Component } from 'react'

class Event extends Component {
  constructor() {
    super()
    this.state = {
      event: [],
    }
  }
  componentDidMount() {
    const w = new WebSocket("ws://localhost:8889");
    w.onopen = () => {
      w.send(JSON.stringify({ type: "getEvent", id: parseInt(window.location.href.split("/").pop()) }));
      w.onmessage = (event) => {
        this.setState({ event: JSON.parse(event.data) })
      }
    }
  }
  render() {
    if (this.state.event && this.state.event.type === 'EVENT_DATA') {
      var e = this.state.event;
      console.log(e.data.name)
    }

    return (
      <div>
        {/* <h2>{e.data.name}</h2> */}
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