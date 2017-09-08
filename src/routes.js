import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './App'
import Login from './components/Login'

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ Login }/>
    <Route path='/login' component={ Login }/>
  </Route>
)

// function requireAuth(nextState, replace) {
//   if (!sessionStorage.jwt) replace({ pathname: '/' })
// }
//
// function redirectToHomeIfLoggedIn() {
//   if(!!sessionStorage.jwt) browserHistory.push('/')
// }
