export default url => {
  const etag = localStorage.getItem(`etag:${url}`)
  const fetchHeaders = new Headers()
  fetchHeaders.append('Content-Type', 'application/json')

  if (etag) {
    fetchHeaders.append('If-None-Match', etag)
  }

  const config = {
    method: 'GET',
    mode: 'cors',
    headers: fetchHeaders
  }

  const request = new Request(url, config)

  return fetch(request).then(function(response) {
    if (response.status === 304) {
      const data = localStorage.getItem(`data:${url}`)
      return JSON.parse(data)
    }

    return response
      .json()
      .then(data => {
        const newEtag = response.headers.get('ETag')
        localStorage.setItem(`etag:${url}`, newEtag)
        localStorage.setItem(`data:${url}`, JSON.stringify(data))

        return data
      })
      .catch(err => {
        console.error(url, err)
        return
      })
  })
}
