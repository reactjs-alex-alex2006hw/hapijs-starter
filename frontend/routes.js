import React from 'react'
import {IndexRoute, Route} from 'react-router'

import App from './views/app'
import Home from './views/home'
import About from './views/about'
import Register from './views/register'
import Login from './views/login'
import NotFound from './views/notFound'
import ServerError from './views/serverError'


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="register" component={Register}/>
        <Route path="login" component={Login}/>
        <Route path="serverError" component={ServerError}/>
        <Route path="*" component={NotFound}/>
    </Route>
)
