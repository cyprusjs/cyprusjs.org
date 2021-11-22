import 'windi.css'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

function CyprusJS({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default CyprusJS
