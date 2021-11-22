import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{js,jsx,css}'],
    exclude: ['node_modules', '.git', '.next/**/*']
  },
  attributify: true,
  shortcuts: {
    btn: 'rounded-lg border border-gray-300 text-gray-100 bg-blue-500 px-4 py-2 m-2 inline-block hover:shadow'
  }
})
