import * as types from '../actions/Types'

const WITHDRAW_ETH_STATE = {
  loading: false,
  executed: false,
  withdrawAmount: null,
  withdrawTo: null,
  note: null,
  error: null
}

export default (state = WITHDRAW_ETH_STATE, action) => {
  switch (action.type) {
    case types.SET_ETH_WITHDRAW_AMOUNT:
      return {
        ...state,
        withdrawAmount: action.payload
      }

    case types.WITHDRAW_ETH_LOADING:
      return {...state, loading: !state.loading}

    case types.WITHDRAW_ETH_SUCCESS:
      let payload = action.payload

      return {
        ...state,
        loading: false,
        withdrawAmount: null, // TODO (djs): ....
        withdrawTo: payload.to,
        error: ''
      }

    case types.WITHDRAW_ETH_ERROR:
      let errorMsg = 'Withdraw ETH error'
      return {...state, error: errorMsg, loading: false}

    default:
      return state
  }
}
