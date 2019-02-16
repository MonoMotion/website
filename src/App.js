import React from 'react'

import Top from './pages/top'
import Tech from './pages/technology'
import Reficere from './pages/technology/reficere'

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
    </div>
  </Router>
)

export default App
