import * as React from 'react'

import QuestionList from './QuestionList'
import { Example } from '../interfaces'

type Props = {
  item: Example
}

const ExampleListDetail: React.FC<Props> = props => (
    <div>
      <h1>Detail for {props.item.name}</h1>
      <p>ID: {props.item.id}</p>
      <QuestionList eid={props.item.id} questions={props.item.questions} />
    </div>
  )

export default ExampleListDetail
