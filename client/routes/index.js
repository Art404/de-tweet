import React from 'react'
import {Route, Router, browserHistory, IndexRoute} from 'react-router'
import App from '../containers/App/App'
import Home from '../containers/Home/Home'
import About from '../containers/About/About'
import Setup from '../containers/Setup/Setup'
import Delete from '../containers/Delete/Delete'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="setup" component={Setup}/>
      <Route path="about" component={About}/>
      <Route path="delete" component={Delete}/>
    </Route>
  </Router>
)
