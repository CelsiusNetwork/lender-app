import * as types from '../actions/Types'

const REGISTER_INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  user: null,
  loading: false,
  error: ''
}

export default (state = REGISTER_INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REGISTER_FNAME_CHANGED:
      return { ...state, firstName: action.payload }
    case types.REGISTER_LNAME_CHANGED:
      return { ...state, lastName: action.payload }
    case types.REGISTER_EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case types.REGISTER_PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case types.REGISTER_LENDER_LOADING:
      return { ...state, loading: true }
    case types.REGISTER_LENDER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        email: '',
        password: '',
        error: '',
        loading: false
      }
    case types.REGISTER_LENDER_FAIL:
      let errorMsg
      errorMsg = 'register lender fail'
      return { ...state, error: errorMsg, loading: false }
    default:
      return state
  }
}
