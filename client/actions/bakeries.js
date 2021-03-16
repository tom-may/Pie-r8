import { getBakeries } from '../apis/bakeries'

export const SET_BAKERIES = 'SET_BAKERIES'

export function setBakeries (bakeries) {
  return {
    type: SET_BAKERIES,
    bakeries
  }
}

export function fetchBakeries () {
  return dispatch => {
    return getBakeries()
      .then(bakeries => {
        dispatch(setBakeries(bakeries))
        return null
      })
  }
}
