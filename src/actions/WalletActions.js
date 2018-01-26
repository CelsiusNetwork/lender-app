import * as types from './Types'
import {WalletService} from '../services'
import {NavigationActions} from 'react-navigation'

export const withdrawETH = (password, fromAddress, toAddress, value, token) => {
  return (dispatch) => {
    dispatch({
      type: types.WITHDRAW_ETH_LOADING
    })

    // Delay redirection in 5 seconds
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
    service.sendETH(fromAddress, toAddress, value)
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
  if (response.ok === true) {
    dispatch({
      type: types.WITHDRAW_ETH_SUCCESS,
      payload: response._bodyText
    })
    // TODO (djs):
  }
  if (response.ok === false) {
    // TODO (djs):
  }
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
  dispatch({
    type: types.FETCH_WALLET_BALANCE_SUCCESS,
    payload: response
  })
}
