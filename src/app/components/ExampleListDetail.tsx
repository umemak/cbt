import * as React from 'react';

import QuestionList from './QuestionList';
import { Example } from '../interfaces';

type Props = {
  item: Example;
};

const ExampleListDetail: React.FC<Props> = ({ item }) => (
  <div>
    <h1>Detail for {item.name}</h1>
    <p>ID: {item.id}</p>
    <QuestionList eid={item.id} questions={item.questions} />
  </div>
);

export default ExampleListDetail;
