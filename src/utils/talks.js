import get from './get'

export default eventId => {
  const issuesUrl = `https://api.github.com/repos/cyprusjs/CyprusJS/issues?labels=talks&milestone=${eventId}`
  return get(issuesUrl).then(data => {
    return data
  })
}
