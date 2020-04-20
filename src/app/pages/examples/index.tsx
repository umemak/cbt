import * as React from 'react';
import Link from 'next/link';
import firebase from '../../firebase/clientApp';

import Layout from '../../components/Layout';
import ExampleList from '../../components/ExampleList';
import UserName from '../../components/UserName';
import { Example } from '../../interfaces';

type Props = {
  examples: Example[];
  pathname: string;
  errors?: string;
};

class ExamplesIndexPage extends React.Component<Props> {
  static getInitialProps = async () => {
    try {
      const db = firebase.firestore();
      const snapshot = await db.collection('examples').get();
      const examples = snapshot.docs.map((doc) => doc.data());

      return { examples };
    } catch (err) {
      return { errors: err.message };
    }
  };

  render() {
    const { examples, errors } = this.props;

    if (errors) {
      return (
        <Layout title="Error | Next.js + TypeScript Example">
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </Layout>
      );
    }

    if (!examples) {
      return (
        <Layout title="Error | Next.js + TypeScript Example">
          <p>
            <span style={{ color: 'red' }}>Error:</span> Example not found.
          </p>
        </Layout>
      );
    }

    return (
      <Layout title="Examples List | Next.js + TypeScript Example">
        <h1>Examples List</h1>
        <UserName />
        <ExampleList examples={examples} />
        <p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </p>
      </Layout>
    );
  }
}

export default ExamplesIndexPage;
