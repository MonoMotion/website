import React from 'react'
import Header from '../../../Header'

/* eslint import/no-webpack-loader-syntax: off */
import post from '!html-loader!!markdown-loader!./details.md'

import { Content, Heading, Section } from 'react-bulma-components'

const Post = () => (
  <div>
    <Header />
    <Section>
      <Content>
        <div dangerouslySetInnerHTML={{ __html: post }} />
      </Content>
    </Section>
  </div>
)

export default Post
