import '../styles/globals.css'
import '../styles/navbar.css'
import Head from 'next/head'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
    </div>
  )
}

export default function App({ Component, pageProps }) {

  
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Tech Byte Bridge | Web, Cloud & Digital Services UK</title>
      </Head>
      <Component {...pageProps} />
      </ErrorBoundary>
    </>
  )
}