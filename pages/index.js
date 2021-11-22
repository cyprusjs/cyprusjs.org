import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { NextSeo } from 'next-seo'

export default function Home({ markdown }) {
  return (
    <>
      <NextSeo
        title="CyprusJS - JavaScript User Group in Cyprus"
        description="CyprusJS connects programmers, engineers and JavaScript enthusiasts in Cyprus through cultivating events where we can give them a platform to educate, inspire and demonstrate new technologies to each other."
        canonical="https://cyprusjs.org/"
      />
      <div className="">
        <main className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                CyprusJS
              </h1>
            </div>
          </div>
          <div className="text-lg max-w-prose mx-auto">
            <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
              <ReactMarkdown
                remarkPlugins={[[remarkGfm]]}
                skipHtml={true}
                children={markdown}
              />
            </div>
          </div>
        </main>

        <footer className=""></footer>
      </div>
    </>
  )
}

export async function getStaticProps(ctx) {
  try {
    const readmeUrl =
      'https://raw.githubusercontent.com/cyprusjs/CyprusJS/main/README.md'
    const res = await fetch(readmeUrl)
    const markdown = await res.text()

    return {
      props: {
        markdown
      }
    }
  } catch (error) {
    console.log(error)
    return { props: { markdown: '' } }
  }
}
