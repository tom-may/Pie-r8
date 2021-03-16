import { SET_BAKERIES, ADD_BAKERY, DELETE_BAKERY, UPDATE_BAKERY } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BAKERIES:
      return action.bakeries
    case ADD_BAKERY:
      return [...state, {id: action.id, name: action.name, address: action.address}]
    case DELETE_BAKERY:
      return state.filter(bakery => bakery.id !== action.id)
    case UPDATE_BAKERY:
      return state.map(bakery => bakery.id === action.id)
    default:
      return state
  }
}

export default reducer
