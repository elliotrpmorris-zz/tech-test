import React, { Component } from 'react'
import styled from 'styled-components';

class LiveEvents extends Component {
	constructor() {
		super()
		this.state = {
			liveEvents: [],
			market: '',
		}
	}
	getEvents(){
		
	}
	componentDidMount() {
		const w = new WebSocket("ws://localhost:8889");
		w.onopen = () => {	
			//w.addEventListener("message", e => (console.log()));
			w.onmessage = (event) => {
				this.setState({ liveEvents: JSON.parse(event.data) })		
			}	
			w.send(JSON.stringify({ type: "getMarket", id: 93649011 }));
		}	
		setInterval( _ =>{
			w.send(JSON.stringify({ type: "getLiveEvents", primaryMarkets: true }));
		},2000 )
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
		if(this.state.liveEvents.data && Array.isArray(this.state.liveEvents.data)){
			console.log(this.state.liveEvents.data);
			var eventList = this.state.liveEvents.data.map(function(event){
				return <TableRow key={event.eventId}>
					<TableCell>{event.startTime}</TableCell>
					<TableCell>{event.competitors[0].name}</TableCell>
					<TableCell>{event.scores.home}</TableCell>
					<TableCell>{event.scores.away}</TableCell>
					<TableCell>{event.competitors[1].name}</TableCell>
				</TableRow>;			
			})
		}

		return (
			<div>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell>Start Time</TableCell>
						<TableCell>Home Team</TableCell>
						<TableCell>Home Score</TableCell>
						<TableCell>Away Team</TableCell>
						<TableCell>Away Score</TableCell>
					</TableRow>
					{eventList}
				</TableBody>
			</Table>	
		</div>
		)
	}
}
export default LiveEvents