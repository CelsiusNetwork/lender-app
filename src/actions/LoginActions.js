import * as types from './Types'
import auth0Service from '../services/Auth0Service'
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

export const loginLender = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_LENDER_LOADING
    })
    auth0Service.siginInWithEmailAndPassword(email, password)
      .then(token => loginLenderSuccess(dispatch, token))
      .catch(error => loginLenderFail(dispatch, error))
  }
}

const loginLenderSuccess = (dispatch, token) => {
  dispatch({
    type: types.LOGIN_LENDER_SUCCESS,
    payload: token
  })
}

const loginLenderFail = (dispatch, error) => {
  dispatch({
    type: types.LOGIN_LENDER_FAIL,
    payload: error
  })
}