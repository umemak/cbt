import * as React from 'react';
import Link from 'next/link';

import { Example } from '../interfaces';

type Props = {
  data: Example;
};

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/examples/[id]/start" as={`/examples/${data.id}/start`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
