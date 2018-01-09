import * as types from '../actions/Types'

const WITHDRAW_ETH_STATE = {
  'loading': false,
  'withdrawAmount': null,
  'withdrawTo': null,
  'note': null,
  'error': null
}

export default (state = WITHDRAW_ETH_STATE, action) => {
  switch (action.type) {
    case types.WITHDRAW_ETH_LOADING:
      return { ...state, loading: true }
    case types.WITHDRAW_ETH_SUCCESS:
      console.log('FETCH_WALLET_BALANCE_SUCCESS yea:')
      var a = JSON.parse(action.payload)
      console.log(a.ether)
      return {
        ...state,
        loading: a.ether,
        withdrawAmount: action.payload.deg,
        withdrawTo: '',
        note: '',
        error: ''
      }
    case types.WITHDRAW_ETH_ERROR:
      let errorMsg
      errorMsg = 'Withdraw ETH error'
      return { ...state, error: errorMsg, loading: false }
    default:
      return state
  }
}