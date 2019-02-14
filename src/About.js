import React from 'react'

import { Heading, Box, Button, Container } from 'react-bulma-components'

const AboutSection = (props) => (
  <Container>
    <Heading>MonoMotionフレームワークで、ロボットを自在に動かそう。</Heading>
    <Box>
      <Heading subtitle>
        ロボットを動かすのは、難しかった。
      </Heading>
      <p>
        今までロボットを動かすには、高度な専門知識と技術が必要でした。しかし誰が趣味のロボットを動かすために大学に入学して高度な学問を学ぼうと思うでしょうか？
        ロボット(特に二足歩行など複雑なもの)はその制御の難しさから、気軽な趣味に成り得なかったのです。
        過去に中学生だった私たち開発者チームが、自作の二足歩行ロボットを満足に歩行させるのにかかった期間は<strong>9ヶ月</strong>でした。
      </p>
    </Box>
    <Box>
      <Heading subtitle>
        誰でも、創作欲のままにロボットを動かせる時代に。
      </Heading>
      <p>
        私たちはMonoMotionフレームワークで、ホビーロボットを動かす新たな選択肢を提示します。
        簡単な操作でロボットモデルをコンピューター上に用意し、モーションを作るだけ。あとは全て私たちが開発したソフトウェアが自動でやってくれます。
        実際に事前知識のない中学一年生にMonoMotionフレームワークを試してもらったところ、たった<strong>40分</strong>でモーションを作ることができました。
      </p>
    </Box>
  </Container>
)

export default AboutSection
