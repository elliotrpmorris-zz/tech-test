import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Events from './Events'
import Event from './Event'

// The Roster component matches one of two different routes
// depending on the full pathname
const LiveEvents = () => (
  <Switch>
    <Route exact path='/live-events' component={Events} />
    <Route path='/events/:id' component={Event} />
  </Switch>
)

export default LiveEvents