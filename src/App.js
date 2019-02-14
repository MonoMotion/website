import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'

import Top from './Top'
import Timeline from './Timeline'
import About from './About'
import Description from './Description'
import Footer from './Footer'
import Release from './Release'

import { Section } from 'react-bulma-components'

const App = () => (
  <div className="App">
    <Section>
      <Top />
    </Section>

    <Section>
      <About />
    </Section>

    <Section className="has-background-dark">
      <Timeline />
    </Section>

    <Section>
      <Description />
    </Section>

    <Section paddingless>
      <Release />
    </Section>

    <Section>
      <Footer />
    </Section>
  </div>
)

export default App
