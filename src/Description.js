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
  <div>
    <DescriptionRow
      title="Refirece"
      subtitle="モデル作成を早く簡単に。"
      link="/"
    >
      ロボットの3Dモデルを作るにあたって、各パーツの重量測定と重心位置の計算は非常に大変でした。いちいち分解する必要があったからです。Reficereはロボットを分解することなく、短時間に半自動的に重量測定をする重量測定支援システムです。
    </DescriptionRow>
    <DescriptionRow
      title="BlendMotion"
      subtitle="モーションをデザインする。"
      link="/"
    >
      ロボットモデルを使い、ロボットのモーションをデザインするインターフェースを提供します。Blenderという広く使われている3DCGソフトウェアをベースにしており、誰でも簡単にモーションをデザインすることができます。
    </DescriptionRow>
    <DescriptionRow
      title="Trainer"
      subtitle="モーションを自動で改善。"
      link="/"
    >
      デザインしたモーションは、そのまま物理世界で意図した通りに動くとは限りません。Trainerは、モーションが製作者の意図通りに動くように自動でモーションを改善します。
    </DescriptionRow>
    <DescriptionRow
      title="flom-runner"
      subtitle="あとは実機で動かすだけ。"
      link="/"
    >
      あとは実機のロボットで動かすだけです。flom、servoarrayテクノロジーにより、実機でのモーション実行が今までと比べて圧倒的に簡単かつシンプルになっています。
    </DescriptionRow>
  </div>
)

export default Description