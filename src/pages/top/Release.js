import React from 'react'
import { Heading, Hero, Container } from 'react-bulma-components'

const Release = () => (
  <Hero color="primary" size="medium" className="has-text-centered">
    <Hero.Body>
      <Container>
        <Heading>2019年3月 β版リリース予定</Heading>
        <Heading subtitle>Don't miss updates on <a href="https://twitter.com/monomotionhq">@monomotionhq</a></Heading>
      </Container>
    </Hero.Body>
  </Hero>
)

export default Release
