import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
class App extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }
  render() {
    return (
      <div className='button__container'>
        <button className='button'>Click Me</button>
      </div>
    )
  }
}
export default App