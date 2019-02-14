import React from 'react'
import { Hero, Container, Heading, Button } from 'react-bulma-components'

import Header from './Header'

const Top = () => (
  <Hero color="light" size="fullheight">
    <Hero.Head>
      <Header />
    </Hero.Head>

    <Hero.Body>
      <Container className="has-text-centered">
        <Heading>
          MonoMotion Robotics Framework
        </Heading>
        <Heading subtitle>
          Design your robots' motion <strong>without the hassle</strong>
        </Heading>
        <div>
          <Button color="white">
            See details
          </Button>
          <Button color="info">
            GitHub
          </Button>
        </div>
      </Container>
    </Hero.Body>
  </Hero>
)

export default Top
