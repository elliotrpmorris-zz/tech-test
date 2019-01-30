import React, { Component } from 'react'
//import styled from 'styled-components';
//import Event from './Event'

class LiveEvents extends Component {
	constructor() {
		super()
		this.state = {
			liveEvents: '',
		}
	}
	componentDidMount() {
		const w = new WebSocket("ws://localhost:8889");
		w.onopen = () => {
			console.log('Opened connection');

			// send data to the server
			w.addEventListener("message", e => (console.log()));
			w.send(JSON.stringify({ type: "getLiveEvents", primaryMarkets: false }));
		}
		w.onmessage = (event) => {
			this.setState({ liveEvents: JSON.parse(event.data) })
			console.log(this.state.liveEvents);
		}
	}

	render() {
		return (
			<div></div>
		)
	}
}
export default LiveEvents