import { combineReducers } from 'redux'

import AuthReducer from './AuthReducer'
import NavigatorReducer from './NavigatorReducer'
import RegisterReducer from './RegisterReducer'

export default combineReducers({
  auth: AuthReducer,
  nav: NavigatorReducer,
  register: RegisterReducer
})
