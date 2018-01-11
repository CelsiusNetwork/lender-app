import * as types from './Types'
import { WalletService, TestEtherScanService } from '../services'
import { NavigationActions } from 'react-navigation'
import Navigator from '../Navigator'

export const withdrawETH = (password, fromAddress, toAddress, value, token) => {
  console.log('lalala')
  return (dispatch) => {
    dispatch({
      type: types.WITHDRAW_ETH_LOADING
    })
    WalletService().sendETH(password, fromAddress, toAddress, value, token)
      .then(response => handleWithdrawETH(dispatch, response))
  }
}

export const setWithdrawAmount = (text) => {
  return (dispatch) => {
    dispatch({
      type: types.SET_ETH_WITHDRAW_AMOUNT,
      payload: text
    })
    dispatch(NavigationActions.navigate({
      routeName: 'ManageFoundsConfirm',
      actions: [
        NavigationActions.navigate({ routeName: 'ManageFoundsConfirm' })
      ]
    }))
  }
}

const handleWithdrawETH = (dispatch, response) => {
  if (response.ok === true) {
    dispatch({
      type: types.WITHDRAW_ETH_SUCCESS,
      payload: response._bodyText
    })
    dispatch(NavigationActions.navigate({
      routeName: 'ManageFoundsSuccess',
      actions: [
        NavigationActions.navigate({ routeName: 'ManageFoundsSuccess' })
      ]
    }))
  }
  if (response.ok === false) {
    dispatch(NavigationActions.navigate({
      routeName: 'ManageFoundsConfirm',
      actions: [
        NavigationActions.navigate({ routeName: 'ManageFoundsError' })
      ]
    }))
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