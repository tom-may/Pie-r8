import { combineReducers } from 'redux'

import auth from './auth'
import fruits from './fruits'

export default combineReducers({
  auth,
  fruits
})
