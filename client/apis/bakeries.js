import request from 'superagent'

const rootUrl = '/api/v1/bakeries'

export function getBakeries () {
  return request.get(rootUrl)
    .then(res => {
      return res.body.bakeries
    })
}
