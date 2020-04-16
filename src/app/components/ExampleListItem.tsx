import * as React from 'react';
import Link from 'next/link';

import { Example } from '../interfaces';

type Props = {
  example: Example;
};

const ListItem: React.FunctionComponent<Props> = ({ example }) => (
  <Link href="/examples/[eid]/start" as={`/examples/${example.eid}/start`}>
    <a>
      {example.eid}: {example.name}
    </a>
  </Link>
);

export default ListItem;
