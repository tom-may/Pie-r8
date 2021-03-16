import request from 'superagent'

const rootUrl = '/api/v1'

export function getBakeries () {
  return request.get(rootUrl + '/bakeries')
    .then(res => {
      return res.body.bakeries
    })
}
