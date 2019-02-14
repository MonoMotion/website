import React from 'react'
import { Heading, Button, Section, Container, Columns } from 'react-bulma-components'

const DescriptionRow = (props) => (
  <Section>
    <Container>
      <Columns>
        <Columns.Column>
          {props.hero}
        </Columns.Column>
        <Columns.Column>
          <Heading subtitle>{props.subtitle}</Heading>
          <Heading>{props.title}</Heading>
          <p>
            {props.children}
          </p>
          <Button href={props.link}>
            技術について
          </Button>
        </Columns.Column>
      </Columns>
    </Container>
  </Section>
)

const Description = () => (
  <DescriptionRow
    title="Refirece"
    subtitle="モデル作成を早く簡単に。"
    link="/"
  >
    ロボットの3Dモデルを作るにあたって、各パーツの重量測定と重心位置の計算は非常に大変でした。いちいち分解する必要があったからです。Reficereはロボットを分解することなく、短時間に半自動的に重量測定をする重量測定支援システムです。
  </DescriptionRow>
)

export default Description
