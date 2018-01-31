import * as types from '../actions/Types'

const LENDER_INITIAL_STATE = {
  lender: null,
  name: null,
  surname: null,
  email: null,
  walletAddress: null,
  phoneNumber: null,
  registerForm: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: ''
  },
  lenderRewardPoint: 0,
  loading: false,
  error: null
}

export default (state = LENDER_INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_LENDER_LOADING:
      return {...state, loading: true}

    case types.FETCH_LENDER_SUCCESS:
      const { name, surname, phone_number, address } = action.payload.user_metadata
      return {
        ...state,
        lender: action.payload,
        name,
        surname,
        phoneNumber: phone_number,
        walletAddress: address,
        loading: false,
        error: null
      }

    case types.FETCH_LENDER_FAIL:
      let errorMsg
      errorMsg = 'Lender fetch fail'
      return {...state, error: errorMsg, loading: false}

    case types.FETCH_LENDER_REWARD_POINTS_SUCCESS:
      return {...state, lenderRewardPoint: action.payload}

    case types.UPDATE_REGISTER_FORM:
      return {
        ...state,
        registerForm: action.payload ? {...action.payload} : {...LENDER_INITIAL_STATE.registerForm},
        error: null
      }

    case types.REGISTER_LENDER_LOADING:
      return {...state, loading: true}

    case types.REGISTER_LENDER_SUCCESS:
      return {
        ...state,
        registerForm: {...LENDER_INITIAL_STATE.registerForm},
        error: null,
        loading: false
      }

    case types.REGISTER_LENDER_FAILURE:
      return {...state, error: action.payload, loading: false}

    default:
      return state
  }
}
