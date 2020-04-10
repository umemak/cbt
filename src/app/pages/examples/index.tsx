import { NextPage } from 'next'
import Link from 'next/link'
import { db } from '../../firebase/clientApp'

import Layout from '../../components/Layout'
import ExampleList from '../../components/ExampleList'
import { Example } from '../../interfaces'
// import { sampleFetchWrapper } from '../../utils/sample-api'

type Props = {
  examples: Example[]
  pathname: string
}

const ExamplesIndex: NextPage<Props> = ({ examples, pathname }) => (
  <Layout title='Users List | Next.js + TypeScript Example'>
    <h1>Examples List</h1>
    <p>
      Example fetching data from inside <code>getInitialProps()</code>.
    </p>
    <p>You are currently on: {pathname}</p>
    <ExampleList examples={examples} />
    <p>
      <Link href='/'>
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

ExamplesIndex.getInitialProps = async ({ pathname }) => {
  // Example for including initial props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  // const hostname = (typeof window !== 'undefined') ? 'https://' + window.location.hostname : 'http://localhost:3000'
  // console.log("host: " + hostname)
  // const examples: Example[] = await sampleFetchWrapper(
  //   `${hostname}/api/examples`
  // )
  const snapshot = db.collection('examples').get()
  console.log(snapshot.docs())
  const examples = snapshot.docs.map(doc => doc.data())
  return { examples, pathname }
}

export default ExamplesIndex
