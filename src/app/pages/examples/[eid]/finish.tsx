import * as React from 'react'
import { NextPageContext } from 'next'

import { Example } from '../../../interfaces'
import Layout from '../../../components/Layout'
import ExampleFinish from '../../../components/ExampleFinish'
import { sampleFetchWrapper } from '../../../utils/sample-api'

type Props = {
  example?: Example
  errors?: string
}

class InitialPropsDetail extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const { eid } = query
      console.log("eid: " + eid)
      const hostname = (typeof window !== "undefined") ? 'https://' + window.location.hostname : 'http://localhost:3000'
      // console.log("host: " + hostname)
      const example = await sampleFetchWrapper(
        `${hostname}/api/examples/${Array.isArray(eid) ? eid[0] : eid}`
      )
      // console.log("item: " + JSON.stringify(item))
      return { example }
    } catch (err) {
      return { errors: err.message }
    }
  }

  render() {
    const { example, errors } = this.props

    if (errors) {
      return (
        <Layout title={`Error | Next.js + TypeScript Example`}>
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </Layout>
      )
    }

    if (!!!example) {
      return (
        <Layout title={`Error | Next.js + TypeScript Example`}>
          <p>
            <span style={{ color: 'red' }}>Error:</span> Example not found.
          </p>
        </Layout>
      )
    }

    const answers = example.questions.map(q => (
      {
        qid: q.id,
        answer: '',
        fixed: false,
        flagged: false,
      }
    ))

    return (
      <Layout
        title={`${example.name} | Next.js + TypeScript Example`}
        example={example}
      >
        <ExampleFinish example={example} answers={answers} />
      </Layout>
    )
  }
}

export default InitialPropsDetail
