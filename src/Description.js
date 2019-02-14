import React from 'react'
import { Heading, Button, Container, Columns } from 'react-bulma-components'

import BlendMotionImg from './images/blendmotion.png'
import TrainerImg from './images/trainer.png'
import RunnerImg from './images/runner.png'

const DescriptionRow = (props) => {
  const hero = props.hero
  const desc = (
    <div>
      <Heading subtitle>{props.subtitle}</Heading>
      <Heading>{props.title}</Heading>
      <p>
        {props.children}
      </p>
      <Button href={props.link}>
        技術について
      </Button>
    </div>
  )

  return (
    <Container id={props.id}>
      <Columns>
        <Columns.Column className="is-hidden-desktop">
          {hero}
        </Columns.Column>
        <Columns.Column className="is-hidden-desktop">
          {desc}
        </Columns.Column>

        <Columns.Column className="is-hidden-touch is-hidden-only-desktop">
          {props.left ? desc : hero}
        </Columns.Column>
        <Columns.Column className="is-hidden-touch is-hidden-only-desktop">
          {props.right ? desc : hero}
        </Columns.Column>
      </Columns>
    </Container>
  )
}

const Description = () => (
  <div id="description">
    <DescriptionRow
      id="description-reficere"
      title="Refirece"
      subtitle="モデル作成を早く簡単に。"
      link="/"
      hero={
        <iframe title="reficere-movie" width="100%" height="315" src="https://www.youtube.com/embed/nECBQznYx9g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      }
      left
    >
      ロボットの3Dモデルを作るにあたって、各パーツの重量測定と重心位置の計算は非常に大変でした。いちいち分解する必要があったからです。Reficereはロボットを分解することなく、短時間に半自動的に重量測定をする重量測定支援システムです。
    </DescriptionRow>
    <DescriptionRow
      id="description-blendmotion"
      title="BlendMotion"
      subtitle="モーションをデザインする。"
      link="/"
      hero={
        <img src={BlendMotionImg} alt="BlendMotion" />
      }
      right
    >
      ロボットモデルを使い、ロボットのモーションをデザインするインターフェースを提供します。Blenderという広く使われている3DCGソフトウェアをベースにしており、誰でも簡単にモーションをデザインすることができます。
    </DescriptionRow>
    <DescriptionRow
      id="description-trainer"
      title="Trainer"
      subtitle="モーションを自動で改善。"
      link="/"
      hero={
        <img src={TrainerImg} alt="Trainer" />
      }
      left
    >
      デザインしたモーションは、そのまま物理世界で意図した通りに動くとは限りません。Trainerは、モーションが製作者の意図通りに動くように自動でモーションを改善します。
    </DescriptionRow>
    <DescriptionRow
      id="description-flom-runner"
      title="flom-runner"
      subtitle="あとは実機で動かすだけ。"
      link="/"
      hero={
        <img src={RunnerImg} alt="Runner" />
      }
      right
    >
      あとは実機のロボットで動かすだけです。flom、servoarrayテクノロジーにより、実機でのモーション実行が今までと比べて圧倒的に簡単かつシンプルになっています。
    </DescriptionRow>
  </div>
)

export default Description
