import React, { Component } from 'react'
//import axios from 'axios'
import styled from 'styled-components';
import LiveEvents from './components/LiveEvents'

class App extends Component {

  constructor() {
    super()
    this.state = {
    }
    /* Api stuff */
    // axios.get('https://randomuser.me/api/')
    //   .then(response => this.setState({ username: response.data.results[0].name.first }))
    //.then(response => console.log(response.data.results[0].name.first))
  }
  mounted
  render() {
    const Container = styled.div`
      max-width: 1170px;
      margin: 0 auto;
    `;

    return (
      <Container>
        <LiveEvents />
      </Container>
    )
  }
}
export default App