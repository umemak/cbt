import * as React from 'react'
import { Progress } from '../interfaces'

type Props = {
  eid: string
  progress: Progress
}

const QuestionProgress: React.FC<Props> = props => (
  <ul>
    {props.progress.answers.map(answer => (
      <li key={answer.qid} />
    ))}
  </ul>
)

export default QuestionProgress
