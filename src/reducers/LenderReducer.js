import * as types from '../actions/Types'

const LENDER_INITIAL_STATE = {
  lender: null,
  'name': null,
  'surname': null,
  'email': null,
  'walletAddress': null,
  registerForm: {
    // firstName: 'filip',
    // lastName: 'filipfilip',
    // email: `filip.jovakaric+${ new Date().getTime() }@mvpworkshop.co`,
    // password: 'filip123',
    // phoneNumber: '1234567890'
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: ''
  },
  loading: false,
  error: null
}

export default (state = LENDER_INITIAL_STATE, action) => {
  switch (action.type) {

    case types.FETCH_LENDER_LOADING:
      return { ...state, loading: true }

    case types.FETCH_LENDER_SUCCESS:
      console.log('fetch_lender_success yea:name')
      console.log(action.payload.user_metadata.name)
      return {
        ...state,
        lender: action.payload,
        name: action.payload.user_metadata.name,
        surname: action.payload.user_metadata.surname,
        walletAddress: action.payload.user_metadata.address,
        loading: false,
        error: null
      }

    case types.FETCH_LENDER_FAIL:
      let errorMsg
      errorMsg = 'Lender fetch fail'
      return { ...state, error: errorMsg, loading: false }

    case types.UPDATE_REGISTER_FORM:
      console.log('here')

      return {
        ...state,
        registerForm: action.payload ? { ...action.payload } : { ...LENDER_INITIAL_STATE.registerForm },
        error: null,
      }

    case types.REGISTER_LENDER_LOADING:
      return { ...state, loading: true }

    case types.REGISTER_LENDER_SUCCESS:
      return {
        ...state,
        registerForm: { ...LENDER_INITIAL_STATE.registerForm },
        error: null,
        loading: false
      }

    case types.REGISTER_LENDER_FAILURE:
      return { ...state, error: action.payload, loading: false }

    default:
      return state
  }
}
