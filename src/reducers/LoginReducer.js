import * as types from '../actions/Types'

const LOGIN_INITIAL_STATE = {
  token: null,
  email: '',
  password: '',
  error: '',
  loading: false
}

export default (state = LOGIN_INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case types.LOGIN_PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case types.LOGIN_LENDER_LOADING:
      return { ...state, loading: true }
    case types.LOGIN_LENDER_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        token: action.payload,
        email: '',
        password: '',
        error: '',
        loading: false
      }
    case types.LOGIN_LENDER_FAIL:
      let errorMsg
      switch (action.payload) {
        case 'auth/invalid-email':
          errorMsg = 'It must be a correct email address.'
          break
        case 'auth/invalid-password':
        case 'auth/weak-password':
          errorMsg = 'Must be a password with at least six characters.'
          break
        case 'auth/email-already-exists':
        case 'auth/email-already-in-use':
          errorMsg = 'Incorrect password.'
          break
        default:
          errorMsg = 'Authentication failed.'
      }
      return { ...state, error: errorMsg, loading: false }
    default:
      return state
  }
}
