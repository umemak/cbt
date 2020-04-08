import * as React from 'react'
import Link from 'next/link'

import { Question } from '../interfaces'

type Props = {
  eid: string
  data: Question
}

const QuestionListItem: React.FC<Props> = props => (
  <Link href='/examples/[eid]/start' as={`/examples/${props.eid}/start`}>
    <a>
      {props.data.id}: {props.data.body}
    </a>
  </Link>
)

export default QuestionListItem
