import React from 'react'

import Top from './pages/top'
import Tech from './pages/technology'
import Reficere from './pages/technology/reficere'
import Flom from './pages/technology/flom'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Top} />
      <Route exact path="/technology" component={Tech} />
      <Route exact path="/technology/reficere" component={Reficere} />
      <Route exact path="/technology/flom" component={Flom} />
    </div>
  </Router>
)

export default App
