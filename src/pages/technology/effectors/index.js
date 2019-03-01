import React from 'react'
import Header from '../../../Header'

import PostContent from './details.md'

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
        <PostContent />
      </Content>
    </Section>
  </div>
)

export default Post

