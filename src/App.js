import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'

import Top from './Top'
import Timeline from './Timeline'
import About from './About'
import Description from './Description'
import Footer from './Footer'
import Release from './Release'


const App = () => (
  <div className="App">
    <Top />
    <About />
    <Timeline />
    <Description />
    <Release />
    <Footer />
  </div>
)

export default App
