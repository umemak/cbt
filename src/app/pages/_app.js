import 'fomantic-ui-css/semantic.min.css'
import UserProvider from '../context/userContext'

export default ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
