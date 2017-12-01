import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer'
import RoutesReducer from './RoutesReducer';

export default combineReducers({
  auth: AuthReducer,
  nav: RoutesReducer
});