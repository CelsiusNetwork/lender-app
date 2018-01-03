import * as types from './Types'
import { Auth0Service, siginInWithEmailAndPassword } from '../services'
import { NavigationActions } from 'react-navigation'

export const loginEmailChanged = (text) => {
  return {
    type: types.LOGIN_EMAIL_CHANGED,
    payload: text
  }
}

export const loginPasswordChanged = (text) => {
  return {
    type: types.LOGIN_PASSWORD_CHANGED,
    payload: text
  }
}

export const loginLender = ({ email, password }) => {


  return (dispatch) => {
    dispatch({
      type: types.LOGIN_LENDER_LOADING
    })
    console.log('loginLender() email, password:')
    console.log(email, password)
    Auth0Service().siginInWithEmailAndPassword(email, password)
      .then((response) => console.log(response))
      .catch((error) => console.debug(error))
  }
}

const loginLenderSuccess = (dispatch, token) => {
  console.log('loginLenderSuccess()')
  console.log(token)
  dispatch({
    type: types.LOGIN_LENDER_SUCCESS,
    payload: token
  })
}

const loginLenderFail = (dispatch, error) => {
  console.log('loginLenderFail()')
  console.log(error)
  dispatch({
    type: types.LOGIN_LENDER_FAIL,
    payload: error
  })
}