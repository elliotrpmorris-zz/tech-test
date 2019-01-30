import React, { Component } from 'react'
import styled from 'styled-components';
import LiveEvents from './components/LiveEvents'

class App extends Component {

  constructor() {
    super()
    this.state = {
    }
  }
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