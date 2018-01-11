import * as types from './Types'
import { TestEtherScanService } from '../services'
// import { NavigationActions } from 'react-navigation'
// import Navigator from '../Navigator'

export const fetchTransactionsHistory = (walletAddress) => {
    return (dispatch) => {
      dispatch({
        type: types.FETCH_ETH_TRANSACTIONS_LOADING
      })
      TestEtherScanService().fetchTransactionList(walletAddress)
        .then(response => handleTransactionsList(dispatch, response))
        .catch((error) => {
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
    if (response.data.message === 'OK') {
      dispatch({
        type: types.FETCH_ETH_TRANSACTIONS_SUCCESS,
        payload: response.data.result
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