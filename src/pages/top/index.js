import React from 'react'

import Hero from './Hero'
import Timeline from './Timeline'
import About from './About'
import Description from './Description'
import Footer from './Footer'
import Release from './Release'

import { Section } from 'react-bulma-components'


const Top = () => (
  <div>
    <Section paddingless>
      <Hero />
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

    <Section paddingless>
      <Footer />
    </Section>
  </div>
)

export default Top
