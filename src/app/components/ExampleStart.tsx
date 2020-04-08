import * as React from 'react'
import { Message, Tab, Button, Grid, Form, Radio } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown'
import Router from 'next/router'

import firebase from '../firebase/clientApp'

// import ChoiceList from './ChoiceList'
import { Example, Progress } from '../interfaces'
import Timer from './Timer'

type Props = {
  example: Example
  progress: Progress
}

const ExampleStart: React.FC<Props> = props => {
  const [answers, setAnswers] = React.useState(props.progress.answers)
  const isSelected = (qid: string, cid: string) => {
    const answer = answers.find(a => a.qid === qid)
    if (!!!answer) {
      return false
    }
    return answer.answer === cid
  }
  const updateAnswers = e => {
    setAnswers(prev => (prev.map(ans => ans.qid === e.target.name ? { ...ans, answer: e.target.value } : ans)))
  }
  const updateFlag = e => {
    setAnswers(prev => (prev.map(ans => ans.qid === e.target.value ? { ...ans, flagged: !ans.flagged } : ans)))
  }
  const isFlagged = (qid: string) => {
    const answer = answers.find(a => a.qid === qid)
    if (!!!answer) {
      return false
    }
    return answer.flagged
  }
  const panes = props.example.questions.map(q => {
    const flagged = isFlagged(q.id) ? 'flag' : ''
    return ({
      'menuItem': { key: q.id, icon: flagged, content: q.id },
      'render': () => (
        <Tab.Pane>
          <Message>
            <ReactMarkdown source={q.body} />
          </Message>
          <Message>
            {q.choices.map(choice => (
              <Form.Field key={q.id + ':' + choice.id}>
                <Radio
                  key={choice.id}
                  name={q.id}
                  label={choice.text}
                  value={choice.id}
                  checked={isSelected(q.id, choice.id)}
                  onClick={updateAnswers}
                />
              </Form.Field>
            ))}
          </Message>
          <Button icon='flag' content='フラグ' value={q.id} onClick={updateFlag} />
        </Tab.Pane>
      )
    })
  })
  // console.log(panes)

  const checkFinish = async () => {
    const hasFlagged = answers.find(ans => ans.flagged)
    if (hasFlagged) {
      return false
    }

    const uid = firebase.auth().currentUser!.uid
    const answerRef = firebase.firestore().collection('answers').doc(uid + ':' + props.example.id)

    await answerRef.set({
      uid,
      eid: props.example.id,
      createTime: firebase.firestore.FieldValue.serverTimestamp(),
      updateTime: firebase.firestore.FieldValue.serverTimestamp(),
      answers
    })
    console.log('answers stored')
    Router.push('/examples/[eid]/finish', `/examples/${props.example.id}/finish`)
  }

  return (
    <>
      <Grid>
        <Grid.Column width={12}>
          <Message>{props.example.name}</Message>
        </Grid.Column>
        <Grid.Column width={4}>
          <Timer />
          <Button icon='power off' content='テストの終了' onClick={checkFinish} />
        </Grid.Column>
      </Grid>

      <Form>
        <Tab
          menu={{ fluid: true, vertical: true }}
          menuPosition='right'
          panes={panes}
        />
      </Form>
    </>
  )
}

export default ExampleStart
