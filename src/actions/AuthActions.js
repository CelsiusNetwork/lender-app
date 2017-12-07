import * as types from './Types'
import { NavigationActions } from 'react-navigation'

export const emailChangedAuht = (text) => {
  return {
    type: types.EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChangedAuth = (text) => {
  return {
    type: types.PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUserAuth = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_USER_LOADING
    })
  }
}

const loginUserFailAuth = (dispatch, errorCode) => {
  dispatch({
    type: types.LOGIN_USER_FAIL,
    payload: errorCode
  })
}

const loginUserSuccessAuth = (dispatch, user) => {
  dispatch({
    type: types.LOGIN_USER_SUCCESS,
    payload: user
  })
}
