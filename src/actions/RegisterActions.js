import * as types from './Types'
import { NavigationActions } from 'react-navigation'

export const a_firstNameChanged = (text) => {
  return {
    type: types.FNAME_CHANGED,
    payload: text
  }
}

export const a_lastNameChanged = (text) => {
  return {
    type: types.LNAME_CHANGED,
    payload: text
  }
}

export const a_emailChanged = (text) => {
  return {
    type: types.EMAIL_CHANGED_L,
    payload: text
  }
}

export const a_passwordChanged = (text) => {
  return {
    type: types.PASSWORD_CHANGED_L,
    payload: text
  }
}

export const a_register = ({ firstName }) => {
  return (dispatch) => {
    dispatch({
      type: types.REGISTER_LENDER
    })
  }
}

const a_registerFail = (dispatch, errorCode) => {
  dispatch({
    type: types.REGISTER_LENDER_FAILURE,
    payload: errorCode
  })
}

const a_registerSuccess = (dispatch, user) => {
  dispatch({
    type: types.REGISTER_LENDER_SUCCESS,
    payload: user
  })
}