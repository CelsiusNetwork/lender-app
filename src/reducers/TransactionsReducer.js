import * as types from '../actions/Types'
import TransactionModel from '../models/TransactionModel'

const TRANSACTIONS_STATE = {
    transactions: [],
}

export default (state = TRANSACTIONS_STATE, action) => {
  switch (action.type) {
    case types.FETCH_ETH_TRANSACTIONS_SUCCESS:
        return {
            ...state,
            transactions: action.payload.map(t => new TransactionModel(t)).sort((a, b) => a.createdAt > b.createdAt)
        }

    default:
      return state
  }
}