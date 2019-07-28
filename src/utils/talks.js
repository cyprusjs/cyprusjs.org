import get from './get'

export default eventId => {
  const issuesUrl = `https://api.github.com/repos/cyprusjs/cyprusjs/issues?labels=talks&milestone=${eventId}`
  return get(issuesUrl).then(data => {
    return data
  })
}
