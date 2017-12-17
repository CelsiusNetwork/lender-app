import { combineReducers } from 'redux'

import AppTokenReducer from './AppTokenReducer'
import LoginReducer from './LoginReducer'
import NavigatorReducer from './NavigatorReducer'
import RegisterReducer from './RegisterReducer'

export default combineReducers({
  auth: LoginReducer,
  nav: NavigatorReducer,
  token: AppTokenReducer,
  register: RegisterReducer,

})
