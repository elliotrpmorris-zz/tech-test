import React, { Component } from 'react'
import styled from 'styled-components';

class LiveEvents extends Component {

    constructor() {
        super()
        this.state = {
            liveEvents: '',
        }
        const w = new WebSocket("ws://localhost:8889");
        // w.addEventListener("message", m => console.log(JSON.parse(m.data)));
        w.onopen = () => w.addEventListener("message", m => this.setState({ username: m.data }));
        w.onopen = () => w.send(JSON.stringify({ type: "getLiveEvents", primaryMarkets: false }));
        console.log(this.state.liveEvents);
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
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
        )
    }
}
export default LiveEvents