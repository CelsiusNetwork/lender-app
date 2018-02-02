import * as types from './Types'
import {WalletService} from '../services'
import {NavigationActions} from 'react-navigation'
import {ErrorModel} from '../models/ErrorModel'

export const withdrawETH = (fromAddress, toAddress, amount, token) => {
  return (dispatch) => {
    dispatch({
      type: types.WITHDRAW_ETH_LOADING
    })

    // Delay redirection in 3 seconds
    setTimeout(() => {
      dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({routeName: 'Home'})
        ]
      }))

      dispatch({
        type: types.WITHDRAW_ETH_LOADING
      })
    }, 3000)

    let service = new WalletService(token)
    service.sendETH(fromAddress, toAddress, amount)
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
      routeName: 'ManageFundsConfirm',
      actions: [
        NavigationActions.navigate({routeName: 'ManageFundsConfirm'})
      ]
    }))
  }
}

const handleWithdrawETH = (dispatch, response) => {
  let action

  if (response instanceof ErrorModel) {
    action = {type: types.WITHDRAW_ETH_ERROR, payload: response}
  } else {
    action = {type: types.WITHDRAW_ETH_SUCCESS, payload: response}
  }

  dispatch(action)
}

export const fetchWalletBalance = (walletAddress, token) => {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_WALLET_BALANCE_LOADING
    })

    let service = new WalletService(token)

    service.getBalance(walletAddress)
      .then(response => handleWalletBalance(dispatch, response))
  }
}

const handleWalletBalance = (dispatch, response) => {
  let action

  if (response instanceof ErrorModel) {
    action = {type: types.FETCH_WALLET_BALANCE_ERROR, payload: response}
  } else {
    action = {type: types.FETCH_WALLET_BALANCE_SUCCESS, payload: response}
  }

  dispatch(action)
}
