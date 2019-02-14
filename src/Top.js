import React from 'react'
import { Hero, Container, Heading, Button } from 'react-bulma-components'

import Header from './Header'

const Top = () => (
  <div>
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
            Design your robots' motion without the hassle
          </Heading>
          <div>
            <Button color="white">
              See details
            </Button>
            <Button color="info">
              Try now (alpha)
            </Button>
          </div>
        </Container>
      </Hero.Body>
    </Hero>
  </div>
)

export default Top
