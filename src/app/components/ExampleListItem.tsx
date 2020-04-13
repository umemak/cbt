import * as React from 'react';
import Link from 'next/link';

import { Example } from '../interfaces';

type Props = {
  data: Example;
};

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/examples/[id]/start" as={`/examples/${data.eid}/start`}>
    <a>
      {data.eid}: {data.name}
    </a>
  </Link>
);

export default ListItem;
