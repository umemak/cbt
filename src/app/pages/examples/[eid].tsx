import * as React from 'react'
import { NextPageContext } from 'next'

import { Example } from '../../interfaces'
import Layout from '../../components/Layout'
import ExampleListDetail from '../../components/ExampleListDetail'
import { sampleFetchWrapper } from '../../utils/sample-api'

type Props = {
  item?: Example
  errors?: string
}

class InitialPropsDetail extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const { eid } = query
      console.log("eid: " + eid)
      const hostname = (typeof window !== "undefined") ? 'https://' + window.location.hostname : 'http://localhost:3000'
      // console.log("host: " + hostname)
      const item = await sampleFetchWrapper(
        `${hostname}/api/examples/${Array.isArray(eid) ? eid[0] : eid}`
      )
      // console.log("item: " + JSON.stringify(item))
      return { item }
    } catch (err) {
      return { errors: err.message }
    }
  }

  render() {
    const { item, errors } = this.props

    if (errors) {
      return (
        <Layout title={`Error | Next.js + TypeScript Example`}>
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </Layout>
      )
    }

    return (
      <Layout
        title={`${
          item ? item.name : 'Example Detail'
          } | Next.js + TypeScript Example`}
        example={item}
      >
        {item && <ExampleListDetail item={item} />}
      </Layout>
    )
  }
}

export default InitialPropsDetail
