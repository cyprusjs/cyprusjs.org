import get from './get'

const milestonesUrl =
  'https://api.github.com/repos/cyprusjs/CyprusJS/milestones?state=open'

export default () => {
  return get(milestonesUrl).then(data => {
    return data
  })
}
