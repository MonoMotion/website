import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeight, faHandPointer, faMagic, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Columns, Heading, Button, Container, Icon } from 'react-bulma-components'


const TimelineElement = (props) => (
  <VerticalTimelineElement
    iconStyle={{ background: props.background, color: '#fff' }}
    icon={<Icon><FontAwesomeIcon icon={props.icon} /></Icon>}
    date={<Button renderAs={AnchorLink} href={props.refid}>詳しく</Button>}
  >
    <Heading size={4}>{props.title}</Heading>
    <p>{props.subtitle}</p>
  </VerticalTimelineElement>
)


const TimelineSection = () => (
  <div>
    <Container>
      <Heading className="has-text-light">
        MonoMotionは、大きく分けて以下の4ステップで構成されています:
      </Heading>
    </Container>
    <Container>
      <VerticalTimeline layout="one-column">
        <TimelineElement
          refid="#description-reficere"
          title="Reficere"
          subtitle="モデル作成を早く簡単に。Reficereはロボットを分解することなく、短時間に半自動的に重量測定をする重量測定支援システムです。"
          background="rgb(33, 150, 243)"
          icon={faWeight}
        />
        <TimelineElement
          refid="#description-blendmotion"
          title="BlendMotion"
          subtitle="モーションをデザインする。ロボットモデルを使い、ロボットのモーションをデザインするインターフェースを提供します。"
          background="rgb(33, 150, 243)"
          icon={faHandPointer}
        />
        <TimelineElement
          refid="#description-trainer"
          title="Trainer"
          subtitle="モーションを自動で改善。モーションが製作者の意図通りに動くように自動でモーションを改善します。"
          background="rgb(33, 150, 243)"
          icon={faMagic}
        />
        <TimelineElement
          refid="#description-flom-runner"
          title="flom-runner"
          subtitle="あとは実機で動かすだけ。ハードウェア間の差異を開発者、利用者が感じることはありません。"
          background="rgb(33, 150, 243)"
          icon={faMicrochip}
        />
      </VerticalTimeline>
    </Container>
  </div>
)

export default TimelineSection
