export default (
  url,
  accessToken,
  options = {
    credentials: 'same-origin',
    cache: 'no-cache'
  }
) => {
  if (url.substr(0, 4) !== 'http') {
    url = `${process.env.VUE_APP_API_BASE_URL}${url}`
  }
  const fetchHeaders = new Headers()
  fetchHeaders.append('Content-Type', 'application/json')
  fetchHeaders.append('credentials', options.credentials)
  fetchHeaders.append('cache', options.cache)

  if (accessToken) {
    fetchHeaders.append('Authorization', `Bearer ${accessToken}`)
  }

  const config = {
    method: 'GET',
    mode: 'cors',
    headers: fetchHeaders
  }

  const request = new Request(url, config)

  return fetch(request).then(function(response) {
    return response
      .json()
      .then(data => {
        return data
      })
      .catch(err => {
        console.error(url, err)
        return
      })
  })
}
