import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'

import Top from './Top'
import Timeline from './Timeline'
import About from './About'
import Footer from './Footer'


const App = () => (
  <div className="App">
    <Top />
    <About />
    <Timeline />
    <Footer />
  </div>
)

export default App
