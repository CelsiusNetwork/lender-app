import * as types from './Types'
import {EtherScanService} from '../services'

export const fetchTransactionsHistory = (walletAddress) => {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_ETH_TRANSACTIONS_LOADING
    })

    let service = new EtherScanService()

    service.fetchTransactionList(walletAddress).then(
      response => handleTransactionsList(dispatch, response)
    ).catch((error) => {
      transactionsListFail(dispatch, error)
    })
  }
}

export const setActiveTransaction = (transaction) => {
  return (dispatch) => {
    dispatch({
      type: types.SET_ACTIVE_TRANSACTION,
      transaction
    })
  }
}

const handleTransactionsList = (dispatch, response) => {
  if (response.message === 'OK') {
    dispatch({
      type: types.FETCH_ETH_TRANSACTIONS_SUCCESS,
      payload: response.result
    })
  }
  if (response.ok === false) {
    transactionsListFail(dispatch, response.message)
  }
}

const transactionsListFail = (dispatch, error) => {
  dispatch({
    type: types.FETCH_ETH_TRANSACTIONS_FAIL,
    payload: error
  })
}
