import Document, { Html, Head, Main, NextScript } from 'next/document'

class cyprusjs extends Document {
  renderSnippet() {
    return 'window.sa_event=window.sa_event||function(){a=[].slice.call(arguments);sa_event.q?sa_event.q.push(a):sa_event.q=[a]};'
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
          {process.env.NODE_ENV === 'production' && (
            <script
              dangerouslySetInnerHTML={{ __html: this.renderSnippet() }}
            />
          )}
          {process.env.NODE_ENV === 'production' && (
            <script
              async
              defer
              src="https://sa.cyprusjs.org/latest.js"
            ></script>
          )}
        </Head>
        <body className="antialiased font-sans bg-white">
          <Main />
          <NextScript />
          {process.env.NODE_ENV === 'production' && (
            <noscript>
              <img
                src="https://sa.cyprusjs.org/noscript.gif"
                alt=""
                referrerpolicy="no-referrer-when-downgrade"
              />
            </noscript>
          )}
        </body>
      </Html>
    )
  }
}

export default cyprusjs
