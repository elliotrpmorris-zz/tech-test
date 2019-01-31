import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Events from './Events'
import Event from './Event'

/* Setting up routes for events */
const LiveEvents = () => (
  <Switch>
    <Route exact path='/live-events' component={Events} />
    <Route path='/live-events/:id' component={Event} />
  </Switch>
)

export default LiveEvents