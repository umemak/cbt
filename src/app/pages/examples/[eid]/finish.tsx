import * as React from 'react';
import { NextPageContext } from 'next';

import { Example } from '../../../interfaces';
import Layout from '../../../components/Layout';
import ExampleFinish from '../../../components/ExampleFinish';
import firebase from '../../../firebase/clientApp';

type Props = {
  example?: Example;
  errors?: string;
};

class ExamplesFinishPage extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const { eid } = query;
      const db = firebase.firestore();
      const snapshot = await db
        .collection('examples')
        .where('eid', '==', eid)
        .get();
      const example = snapshot.docs[0].data();

      return { example };
    } catch (err) {
      return { errors: err.message };
    }
  };

  render() {
    const { example, errors } = this.props;

    if (errors) {
      return (
        <Layout title="Error | Next.js + TypeScript Example">
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </Layout>
      );
    }

    if (!example) {
      return (
        <Layout title="Error | Next.js + TypeScript Example">
          <p>
            <span style={{ color: 'red' }}>Error:</span> Example not found.
          </p>
        </Layout>
      );
    }

    const answers = example.questions.map((q) => ({
      qid: q.qid,
      answer: '',
      fixed: false,
      flagged: false,
    }));

    return (
      <Layout
        title={`${example.name} | Next.js + TypeScript Example`}
        example={example}
      >
        <ExampleFinish example={example} answers={answers} />
      </Layout>
    );
  }
}

export default ExamplesFinishPage;
