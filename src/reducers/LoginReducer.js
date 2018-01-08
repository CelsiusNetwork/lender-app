import * as types from '../actions/Types'

const LOGIN_INITIAL_STATE = {
  token: null,
  user: null,
  authId: '',
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
      return {
        ...state,
        token: action.payload.tokenId,
        authId: action.payload.lender.sub,
        email: action.payload.lender.email,
        password: '',
        error: '',
        loading: false
      }
    case types.FETCH_LENDER_SUCCESS:
      console.log('jajsjdjdjhfhfhfhfh38u4239749823748923749823')
      return {
        ...state,
        user: action.payload
      }
    case types.LOGIN_LENDER_FAIL:
      let errorMsg
      switch (action.payload) {
        case 'auth/invalid-email':
          errorMsg = 'It must be a correct email address.'
          break
        case 'auth/invalid-password':
        case 'auth/weak-password':
          errorMsg = ''
          break
        case 'auth/email-already-exists':
        case 'auth/email-already-in-use':
          errorMsg = 'Incorrect password.'
          break
        default:
          errorMsg = 'Wrong user data.'
      }
      return { ...state, error: errorMsg, loading: false }
    default:
      return state
  }
}
