import React, { Component } from 'react'
import styled from 'styled-components';

/* Styles */
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  margin: 0 auto;
  text-align: center;
  padding:15px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

class Event extends Component {
  constructor() {
    super()
    this.state = {
      event: [],
    }
  }
  componentDidMount() {
    /* Create websocket connection */
    const w = new WebSocket("ws://localhost:8889");
    w.onopen = () => {
       /* Subscribe to event passing in the current event id */
      w.send(JSON.stringify({ type: "getEvent", id: parseInt(window.location.href.split("/").pop()) }));
      w.onmessage = (event) => {
         /* Set state with the response data from the web socket */
        this.setState({ event: JSON.parse(event.data) })
      }
    }
  }

  renderEvent(event){
    if (event && event.type === 'EVENT_DATA') {
        return (
          <div >
            <h3>{event.data.className} - Event Information</h3>
            <h4>Name: {event.data.name}</h4> 
            <p>Start Time: {event.data.startTime}</p> 
            <h5>Event Type: {event.data.linkedEventTypeName}</h5>
          </div>
        )
    }
  }
  
  render() {
    var e = this.state.event;
    console.log(e)
    return (
      <Card>
        {this.renderEvent(this.state.event)}  
      </Card>
    )
  }
}
export default Event