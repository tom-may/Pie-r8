import { getBakeries, getBakeryById, addBakery, deleteBakery, updateBakery } from '../apis/bakeries'

export const SET_BAKERIES = 'SET_BAKERIES'
export const SET_BAKERY_BY_ID = 'SET_BAKERY_BY_ID'
// export const ADD_BAKERIES = 'ADD_BAKERIES'
// export const DELETE_BAKERY = 'DELETE_BAKERY'
// export const UPDATE_BAKERY = 'UPDATE_BAKERY'

export function setBakeries (bakeries) {
  return {
    type: SET_BAKERIES,
    bakeries
  }
}

export function setBakeryById (bakery) {
  return {
    type: SET_BAKERY_BY_ID,
    bakery
  }
}

// export function addBakeries (bakeries) {
//   return {
//     type: ADD_BAKERIES,
//     bakeries
//   }
// }

export function fetchBakeries () {
  return dispatch => {
    return getBakeries()
      .then(bakeries => {
        dispatch(setBakeries(bakeries))
        return null
      })
  }
}

export function fetchBakeryById () {
  return dispatch => {
    return getBakeryById (id)
    .then(bakery => {
      dispatch(setBakeryById(bakery))
      return null
    })
  }
}

export function addTheBakery (bakery) {
  return dispatch => {
    return addBakery(bakery)
    .then(() => {
      dispatch(fetchBakeries())
      return null
    })
  }
}

export function deleteTheBakery(id) {
  return dispatch => {
    return deleteBakery(id)
    .then (() => {
      dispatch(fetchBakeries())
    })
  }
}

export function updateTheBakery(id, bakery) {
  return dispatch => {
    return updateBakery(id, bakery)
    .then(() => {
      dispatch(fetchBakeries())
      return null
    })
  }
}
