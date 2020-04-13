import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { Button, Message } from 'semantic-ui-react';

import ChoiceList from './ChoiceList';
import QuestionProgress from './QuestionProgress';
import { Question, Progress } from '../interfaces';

type Props = {
  item: Question;
  progress: Progress;
};

const QuestionListDetail: React.FC<Props> = ({ item, progress }) => {
  return (
    <>
      <Button>前へ</Button>
      <Button>次へ</Button>
      <Message>
        <ReactMarkdown source={item.body} />
      </Message>
      <Message>
        <ChoiceList qid={item.id} choices={item.choices} />
      </Message>
      <Button>リセット</Button>
      <Button>フラグ</Button>
      <Button>確定</Button>
      <QuestionProgress eid={item.id} progress={progress} />
    </>
  );
};

export default QuestionListDetail;
