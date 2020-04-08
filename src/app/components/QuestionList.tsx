import * as React from 'react'
import QuestionListItem from './QuestionListItem'
import { Question } from '../interfaces'

type Props = {
  eid: string
  questions: Question[]
}

const QuestionList: React.FC<Props> = props => (
  <ul>
    {props.questions.map(question => (
      <li key={question.id}>
        <QuestionListItem eid={props.eid} data={question} />
      </li>
    ))}
  </ul>
)

export default QuestionList
