import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import { useUser } from '../context/userContext'
import { auth } from '../firebase/clientApp'

const IndexPage: NextPage = () => {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser()

  React.useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
      console.log(user)
    }
    // You also have your firebase app initialized
    console.log(auth)
  }, [loadingUser, user])

  return (
    <Layout title='Home | Next.js + TypeScript Example'>
      <h1>Hello {user && user.uid} to Next.js 👋</h1>
      <p>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
