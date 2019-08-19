import get from './get'

export default () => {
  const membersUrl = 'https://api.github.com/orgs/cyprusjs/members'
  return get(membersUrl).then(data => {
    return data
  })
}
