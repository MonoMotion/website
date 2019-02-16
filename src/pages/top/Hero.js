import React from 'react'
import { Hero, Container, Heading, Button } from 'react-bulma-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Header from '../../Header'
import videoSource from '../../images/background.webm'

import styled from 'styled-components'

const BackgroundVideo = styled.video`
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
`

const Top = () => (
  <Hero color="dark" size="fullheight">
    <BackgroundVideo autoPlay muted loop>
      <source src={videoSource} type="video/webm" />
    </BackgroundVideo>

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
          <Button color="white" href="#description" renderAs={AnchorLink}>
            See details
          </Button>
          <Button color="info" href="https://github.com/MonoMotion" target="_blank" renderAs="a">
            GitHub
          </Button>
        </div>
      </Container>
    </Hero.Body>
  </Hero>
)

export default Top
