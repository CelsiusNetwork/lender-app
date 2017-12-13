import * as types from './Types'
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
  }
}

const loginLenderFail = (dispatch, errorCode) => {
  dispatch({
    type: types.LOGIN_LENDER_FAIL,
    payload: errorCode
  })
}

const loginLenderSuccess = (dispatch, user) => {
  dispatch({
    type: types.LOGIN_LENDER_SUCCESS,
    payload: user
  })
}