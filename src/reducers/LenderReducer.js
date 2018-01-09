import * as types from '../actions/Types'

const LENDER_INITIAL_STATE = {
  'lender': null,
  'name': null,
  'surname': null,
  'email': null,
  'walletAddress': null,
  'loading': false,
  'error': ''
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
    default:
      return state
  }
}
