import { NextPage } from 'next';
import Link from 'next/link';
import firebase from '../../firebase/clientApp';

import Layout from '../../components/Layout';
import ExampleList from '../../components/ExampleList';
import { Example } from '../../interfaces';

type Props = {
  examples: Example[];
  pathname: string;
};

const ExamplesIndex: NextPage<Props> = ({ examples, pathname }) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Examples List</h1>
    <p>
      Example fetching data from inside <code>getInitialProps()</code>.
    </p>
    <p>You are currently on: {pathname}</p>
    <ExampleList examples={examples} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

ExamplesIndex.getInitialProps = async ({ pathname }) => {
  const db = firebase.firestore();
  const snapshot = await db.collection('examples').get();
  const examples = snapshot.docs.map((doc) => doc.data());

  return { examples, pathname };
};

export default ExamplesIndex;
