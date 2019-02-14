import React from 'react'

import Top from './pages/top'
import Tech from './pages/technology'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Top} />
      <Route path="/technology" component={Tech} />
    </div>
  </Router>
)

export default App
