import { combineReducers } from 'redux'

import LoginReducer from './LoginReducer'
import NavigatorReducer from './NavigatorReducer'
import RegisterReducer from './RegisterReducer'

export default combineReducers({
  auth: LoginReducer,
  nav: NavigatorReducer,
  register: RegisterReducer
})
