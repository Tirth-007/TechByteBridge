import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en-GB">
      <Head>
        <link rel="icon" href="/assets/favicon.png" />
        <meta name="author" content="Tech Byte Bridge" />
        <meta name="description" content="Tech Byte Bridge provides UK businesses with modern web design, cloud integration, and digital marketing." />
        <meta name="keywords" content="Web Design UK, Cloud Services UK, SEO UK, Digital Marketing" />
        <meta property="og:title" content="Tech Byte Bridge - Empowering UK Businesses" />
        <meta property="og:description" content="Modern solutions for startups and businesses across the UK." />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.co.uk/" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <body className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
