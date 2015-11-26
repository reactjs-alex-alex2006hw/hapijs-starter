import React from 'react'
import {IndexRoute, Route} from 'react-router'

import App from './views/App'
import Home from './views/Home'
import About from './views/About'
import Register from './views/Register'
import NotFound from './views/NotFound'


export default (
    <Route path="/" component={App}>
      	<IndexRoute component={Home}/>
      	<Route path="about" component={About}/>
      	<Route path="register" component={Register}/>
      	<Route path="*" component={NotFound}/>
   	</Route>
)