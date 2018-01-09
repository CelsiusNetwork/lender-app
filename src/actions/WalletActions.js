import * as types from './Types'
import { WalletService, TestEtherScanService } from '../services'
import { NavigationActions } from 'react-navigation'

export const withdrawETH = (password, fromAddress, toAddress, value, token) => {
  return (dispatch) => {
    dispatch({
      type: types.WITHDRAW_ETH_LOADING
    })
    WalletService().sendETH(password, fromAddress, toAddress, value, token)
      .then(response => handleWithdrawETH(dispatch, response))
  }
}

const handleWithdrawETH = (dispatch, response) => {
  if (response.ok === true) {
    dispatch({
      type: types.WITHDRAW_ETH_SUCCESS,
      payload: response._bodyText
    })
  }
  if (response.ok === false) {
    // handle this beach
  }
}

export const fetchWalletBalance = (walletAddress, token) => {
  console.log('FETCH WALLET BALANCE')
  return (dispatch) => {
    dispatch({
      type: types.FETCH_WALLET_BALANCE_LOADING
    })
    WalletService().getBalance(walletAddress, token)
      .then(response => handleWalletBalance(dispatch, response))
  }
}

const handleWalletBalance = (dispatch, response) => {
  console.log('handleWalletBalance')
    // response = JSON.parse(response)
  console.log(response._bodyText)
  if (response.ok === true) {
    dispatch({
      type: types.FETCH_WALLET_BALANCE_SUCCESS,
      payload: response._bodyText
    })
  }
  if (response.ok === false) {
    // handle this beach
  }
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
  if (response.ok === false) {
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