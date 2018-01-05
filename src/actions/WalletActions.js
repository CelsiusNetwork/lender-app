import * as types from './Types'
import { WalletService, TestEtherScanService } from '../services'
import { NavigationActions } from 'react-navigation'

export const fetchWalletBalance = (walletAddress) => {
  return (dispatch) => {
    dispatch({
      type: types.CHECK_BALANCE_LOADING
    })
    WalletService().getBalance(walletAddress)
      .then(response => handleWalletBalance(dispatch, response))
  }
}

const handleWalletBalance = (dispatch, response) => {

}

export const fetchTransactionsHistory = () => {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_ETH_TRANSACTIONS_LOADING
    })
    TestEtherScanService().fetchTransactionList()
      .then(response => handleTransactionsList(dispatch, response))
      .catch((error) => {
        transactionsListFail(dispatch, error)
      })
  }
}

const handleTransactionsList = (dispatch, response) => {
  response = JSON.parse(response)
  console.log(response.ok)
  if (response.ok === true) {
    dispatch({
      type: types.FETCH_ETH_TRANSACTIONS_SUCCESS,
      payload: response
    })
   // todo: animate something so user knows we are updating
  }
  if (response.ok === true) {
    transactionsListFail(dispatch, response.code)
  }
}

const transactionsListFail = (dispatch, error) => {
  console.debug(error)
  dispatch({
    type: types.FETCH_ETH_TRANSACTIONS_FAIL,
    payload: error
  })
}