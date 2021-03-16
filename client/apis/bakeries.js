import request from 'superagent'

const rootUrl = '/api/v1/bakeries'

export function getBakeries () {
  return request.get(rootUrl)
    .then(res => {
      return res.body.bakeries
    })
}

export function getBakeryById(id) {
  return request.get(rootUrl + '/' + id)
  .then(res => res.body)
}

export function addBakery(bakery) {
  return request.post(rootUrl)
  .send(bakery)
  .then(res => res.body)
  }

  export function deleteBakery(id) {
    return request.delete(rootUrl + '/' + id)
    .then(res => res.body)
  }

  export function updateBakery(id, bakery) {
    return request.patch(rootUrl + '/' + id)
    .send(bakery)
    .then(res => res.body)
  }
  