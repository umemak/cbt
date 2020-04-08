import * as React from 'react'
import { Form, Radio } from 'semantic-ui-react'
import { Choice } from '../interfaces'

type Props = {
  qid: string
  choices: Choice[]
}

const ChoiceList: React.FC<Props> = props => {
  const [state, setState] = React.useState('')
  return (
    <>
      {
        props.choices.map(choice => (
          <Form.Field key={props.qid + ':' + choice.id}>
            <Radio
              key={choice.id}
              name={props.qid}
              label={choice.text}
              value={choice.id}
              checked={state === choice.id}
              onClick={() => setState(choice.id)}
            />
          </Form.Field>
        ))
      }
    </>
  )
}

export default ChoiceList
