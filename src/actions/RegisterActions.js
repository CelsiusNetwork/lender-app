import * as types from './Types'
import { NavigationActions } from 'react-navigation'

export const registerFirstNameChanged = (text) => {
  return {
    type: types.REGISTER_FNAME_CHANGED,
    payload: text
  }
}

export const registerLastNameChanged = (text) => {
  return {
    type: types.REGISTER_LNAME_CHANGED,
    payload: text
  }
}

export const registerEmailChanged = (text) => {
  return {
    type: types.REGISTER_EMAIL_CHANGED,
    payload: text
  }
}

export const registerPasswordChanged = (text) => {
  return {
    type: types.REGISTER_PASSWORD_CHANGED,
    payload: text
  }
}

export const registerPhoneNumberChanged = (text) => {
  return {
    type: types.REGISTER_PHONENUMBER_CHANGED,
    payload: text
  }
}

export const registerLender = ({ firstName }) => {
  return (dispatch) => {
    dispatch({
      type: types.REGISTER_LENDER_LOADING
    })
  }
}

const registerLenderFail = (dispatch, errorCode) => {
  dispatch({
    type: types.REGISTER_LENDER_FAILURE,
    payload: errorCode
  })
}

const registerLenderSuccess = (dispatch, user) => {
  dispatch({
    type: types.REGISTER_LENDER_SUCCESS,
    payload: user
  })
}