import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LiveEvents from './LiveEvents'
import Home from './Home'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/live-events' component={LiveEvents} />
        </Switch>
    </main>
)

export default Main
