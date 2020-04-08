import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Container, Header } from 'semantic-ui-react';
import { Example } from '../interfaces'

type Props = {
  title?: string
  example?: Example
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title'
}) => (
    <div>
      <Container>
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Header>
          <nav>
            <Link href='/'>
              <a>Home</a>
            </Link>{' '}
        |{' '}
            <Link href='/about'>
              <a>About</a>
            </Link>{' '}
        |{' '}
            <Link href='/examples'>
              <a>Examples List</a>
            </Link>
          </nav>
        </Header>
        {children}
        <footer>
          <hr />
          <span>I'm here to stay (Footer)</span>
        </footer>
      </Container>
    </div>
  )

export default Layout
