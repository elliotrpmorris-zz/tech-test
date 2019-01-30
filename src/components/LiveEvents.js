import React, { Component } from 'react'
import styled from 'styled-components';
import { Accordion, AccordionItem } from 'react-sanfona';

class LiveEvents extends Component {
	constructor() {
		super()
		this.state = {
			liveEvents: [],
		}
	}

	componentDidMount() {
		const w = new WebSocket("ws://localhost:8889");
		w.onopen = () => {	
		w.addEventListener("message", e => (console.log(JSON.parse(e.data))));
		w.send(JSON.stringify({ type: "getLiveEvents", primaryMarkets: true }));
			w.onmessage = (event) => {
				this.setState({ liveEvents: JSON.parse(event.data) })		
			}		
		}	
		// setInterval( _ =>{
		//   w.send(JSON.stringify({ type: "getLiveEvents", primaryMarkets: true }));
		// },2000 )
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
				return <AccordionItem key={event.eventId} title={`Item ${event.name}`} expanded={event === 1}>
				<div>
					{`event ${event.startTime} content`}
				</div>
			</AccordionItem>
				// return <TableRow key={event.eventId}>
				//  	<TableCell>{event.name}</TableCell>	
				// 	{/* <TableCell>{event.startTime}</TableCell>
				// 	<TableCell>{event.competitors[0].name}</TableCell>
				// 	<TableCell>{event.scores.home}</TableCell>
				// 	<TableCell>{event.scores.away}</TableCell>
				// 	<TableCell>{event.competitors[1].name}</TableCell> */}
				// </TableRow>;			
			})
		}

		return (
			<div>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell>Live Events</TableCell>
					</TableRow>
					<Accordion>
					{eventList}
					</Accordion>
					
				</TableBody>
			</Table>	
		</div>
		)
	}
}
export default LiveEvents