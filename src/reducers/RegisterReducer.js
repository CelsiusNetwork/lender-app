import * as types from '../actions/Types'

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  user: null,
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  return state
}
