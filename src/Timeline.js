import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeight, faHandPointer, faMagic, faMicrochip } from '@fortawesome/free-solid-svg-icons'

import { Heading, Section, Button, Container, Icon } from 'react-bulma-components'


const TimelineElement = (props) => (
  <VerticalTimelineElement
    iconStyle={{ background: props.background, color: '#fff' }}
    icon={<Icon><FontAwesomeIcon icon={props.icon} /></Icon>}
  >
    <Heading size={4}>{props.title}</Heading>
    <Heading subtitle size={5}>{props.subtitle}</Heading>
    <p>
      {props.children}
    </p>
    <Button>
      Learn more
    </Button>
  </VerticalTimelineElement>
)


const TimelineSection = () => (
  <Section className="has-background-dark">
    <Container>
      <Heading className="has-text-light">
        How to make your robots' motion with MonoMotion framework
      </Heading>
    </Container>
    <Container>
      <VerticalTimeline layout="one-column">
        <TimelineElement
          title="Reficere"
          subtitle="モデル作成を早く簡単に。"
          background="rgb(33, 150, 243)"
          icon={faWeight}
        >
            ロボットの3Dモデルを作るにあたって、各パーツの重量測定と重心位置の計算は非常に大変でした。いちいち分解する必要があったからです。Reficereはロボットを分解することなく、短時間に半自動的に重量測定をする重量測定支援システムです。
        </TimelineElement>
        <TimelineElement
          title="BlendMotion"
          subtitle="モーションをデザインする。"
          background="rgb(33, 150, 243)"
          icon={faHandPointer}
        >
          ロボットモデルを使い、ロボットのモーションをデザインするインターフェースを提供します。Blenderという広く使われている3DCGソフトウェアをベースにしており、誰でも簡単にモーションをデザインすることができます。
        </TimelineElement>
        <TimelineElement
          title="Trainer"
          subtitle="モーションを自動でデザイン。"
          background="rgb(33, 150, 243)"
          icon={faMagic}
        >
          デザインしたモーションは、そのまま物理世界で意図した通りに動くとは限りません。Trainerは、モーションが製作者の意図通りに動くように自動でモーションを改善します。
        </TimelineElement>
        <TimelineElement
          title="flom-runner"
          subtitle="あとは実機で動かすだけ。"
          background="rgb(33, 150, 243)"
          icon={faMicrochip}
        >
          あとは実機のロボットで動かすだけです。flom、servoarrayテクノロジーにより、実機でのモーション実行が今までと比べて圧倒的に簡単かつシンプルになっています。
        </TimelineElement>
      </VerticalTimeline>
    </Container>
  </Section>
)

export default TimelineSection
