import * as types from '../actions/Types'

const LENDER_WALLET_STATE = {
  'ethBalance': null,
  'celBalance': null,
  'loading': false,
  'error': ''
}

export default (state = LENDER_WALLET_STATE, action) => {
  switch (action.type) {
    case types.FETCH_WALLET_BALANCE_LOADING:
      return { ...state, loading: true }
    case types.FETCH_WALLET_BALANCE_SUCCESS:
      console.log('FETCH_WALLET_BALANCE_SUCCESS yea:')
      console.log(action.payload)
      return {
        ...state,
        ethBalance: action.payload.ether,
        celBalance: action.payload.deg,
        loading: false,
        error: ''
      }
    case types.FETCHFETCH_WALLET_BALANCE_ERROR_LENDER_FAIL:
      let errorMsg
      errorMsg = 'Wallet balance error'
      return { ...state, error: errorMsg, loading: false }
    default:
      return state
  }
}
