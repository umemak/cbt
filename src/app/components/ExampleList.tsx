import * as React from 'react';
import ExampleListItem from './ExampleListItem';
import { Example } from '../interfaces';

type Props = {
  examples: Example[];
};

const ExampleList: React.FunctionComponent<Props> = ({ examples }) => (
  <ul>
    {examples.map((example) => (
      <li key={example.eid}>
        <ExampleListItem data={example} />
      </li>
    ))}
  </ul>
);

export default ExampleList;
