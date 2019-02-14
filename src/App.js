import React from 'react'

import Top from './pages/top'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = () => (
  <Router>
    <Route exact path="/" component={Top} />
  </Router>
)

export default App
