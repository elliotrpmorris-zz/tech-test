import React, { Component } from 'react'
import styled from 'styled-components';

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

  renderEvent(event){
    if (event && event.type === 'EVENT_DATA') {
      return Object.entries(event).map(([key, e]) => {
        return (
          <TableRow key={key}>
          <TableCell>{e.startTime}</TableCell>
          <TableCell>{e.name}</TableCell>
          <TableCell>{e.linkedEventTypeName}</TableCell>
          </TableRow>
        )
      })
    }
  }
  
  render() {
    var e = this.state.event;
    console.log(e.data)
    
    return (
      <div>
         <Table>
          <TableBody>
            <TableRow>
              <TableCell>Start Time</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Event Type</TableCell>
            </TableRow>
            {this.renderEvent(this.state.event)}
          </TableBody>
        </Table>
      </div>
    )
  }
}
export default Event