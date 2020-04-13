import * as React from 'react';
import Link from 'next/link';

import { Question } from '../interfaces';

type Props = {
  eid: string;
  data: Question;
};

const QuestionListItem: React.FC<Props> = ({ data, eid }) => (
  <Link href="/examples/[eid]/start" as={`/examples/${eid}/start`}>
    <a>
      {data.id}: {data.body}
    </a>
  </Link>
);

export default QuestionListItem;
