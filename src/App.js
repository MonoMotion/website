import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'

import Header from './Header'
import Hero from './Hero'


const App = () => (
  <div className="App">
    <Header />
    <main role="main">
      <Hero />
    </main>
  </div>
)

export default App
