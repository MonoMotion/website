import React from 'react'
import Header from '../../../Header'

import post from './details.md'

import { Hero, Content, Container, Heading, Section } from 'react-bulma-components'

const Post = () => (
  <div>
    <Header />
    <Hero color="primary" size="medium">
      <Hero.Body>
        <Container>
          <Heading>
            エフェクタについて ~汎用化のミソ~
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
    <Section>
      <Content>
        <div dangerouslySetInnerHTML={{ __html: post }} />
      </Content>
    </Section>
  </div>
)

export default Post

