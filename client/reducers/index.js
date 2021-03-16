import { combineReducers } from 'redux'

import auth from './auth'
import bakeries from './bakeries'

export default combineReducers({
  auth,
  bakeries
})
