import get from './get'

const issuesUrl =
  'https://api.github.com/repos/cyprusjs/cyprusjs/issues?labels=proposals'

export default () => {
  return get(issuesUrl).then(data => {
    return data
  })
}
