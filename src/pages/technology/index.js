import React from 'react'

import Header from '../../Header'
import Hero from './Hero'

import { Content, Heading, Section, Tile } from 'react-bulma-components'
import { Link } from 'react-router-dom'

const Tech = () => (
<div>
  <Section paddingless>
    <Header />
  </Section>
  <Section paddingless>
    <Hero />
  </Section>
  <Section>
    <Tile kind="ancestor">
      <Tile size={8} vertical>
        <Tile>
          <Tile kind="parent" vertical>
            <Tile renderAs="a" kind="child" notification color="primary" to="/technology/trainer">
              <Heading>Trainer</Heading>
              <Heading subtitle>学習の裏側</Heading>
            </Tile>
            <Tile renderAs={Link} kind="child" notification color="primary" to="/technology/effectors">
              <Heading>エフェクタについて</Heading>
              <Heading subtitle>汎用化のミソ</Heading>
            </Tile>
            <Tile renderAs="a" kind="child" notification color="warning" to="/technology/servoarray">
              <Heading>servoarray</Heading>
              <Heading subtitle>モーションがあなたのロボットで動くまで</Heading>
            </Tile>
          </Tile>
          <Tile kind="parent">
            <Tile renderAs={Link} kind="child" notification color="info" to="/technology/flom">
              <Heading>flom モーションのためのライブラリ</Heading>
              <Heading subtitle>MonoMotionを裏で支える技術</Heading>
            </Tile>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile renderAs="article" kind="child" notification color="danger">
            <Heading>Coming soon...</Heading>
            <Heading subtitle>新しい記事を(心が持つ限り)書きます</Heading>
            <div className="content" />
          </Tile>
        </Tile>
      </Tile>
      <Tile kind="parent">
        <Tile renderAs={Link} kind="child" notification color="success" to="/technology/reficere">
          <Heading>Reficere 詳細</Heading>
          <Heading subtitle>数式に威圧されたい方に。</Heading>
          <Content />
        </Tile>
      </Tile>
    </Tile>
  </Section>
</div>
)

export default Tech
