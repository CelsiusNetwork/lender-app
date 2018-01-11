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
      var a = JSON.parse(action.payload)
      console.log(a.ether)

      return {
        ...state,
        ethBalance: a.ether.toFixed(2),
        celBalance: a.deg.toFixed(2),
        loading: false,
        error: ''
      }
    case types.FETCH_WALLET_BALANCE_ERROR:
      let errorMsg
      errorMsg = 'Wallet balance error'
      return { ...state, error: errorMsg, loading: false }
    default:
      return state
  }
}