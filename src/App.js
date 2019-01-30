import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      username: ''
    }
    /* Api stuff */
    // axios.get('https://randomuser.me/api/')
    //   .then(response => this.setState({ username: response.data.results[0].name.first }))
    //.then(response => console.log(response.data.results[0].name.first))
    /* Websocket API */
    const w = new WebSocket("ws://localhost:8889");
    w.addEventListener("message", m => console.log(JSON.parse(m.data)));
    w.onopen = () => w.send(JSON.stringify({ type: "getLiveEvents", primaryMarkets: false }));
  }
  mounted
  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;

    return (
      <div className='button__container'>
        <button className='button'>Click Me</button>
        <Title>{this.state.username}</Title>
      </div>
    )
  }
}
export default App