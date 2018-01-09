import * as types from './Types'
import { NavigationActions } from 'react-navigation'
import { CelsiusService } from '../services'

export const registerLender = (firstName, lastName, email, password, phoneNumber, appToken) => {
  console.log('registerLender()x')
  console.log(firstName, lastName, email, password, phoneNumber, appToken)
  return (dispatch) => {
    dispatch({
      type: types.REGISTER_LENDER_LOADING
    })
    CelsiusService().registerLender(firstName, lastName, email, password, phoneNumber, appToken)
      .then(response => handleRegisterLender(dispatch, JSON.stringify(response)))
      .catch((error) => {
        registerLenderFail(dispatch, error)
      })
  }
}

const handleRegisterLender = (dispatch, user) => {
  console.log('registerLenderSuccess() wooohooo!')
  console.log(user)
  dispatch({
    type: types.REGISTER_LENDER_SUCCESS,
    payload: user
  })
  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Home' })
    ]
  }))
}

const registerLenderFail = (dispatch, errorCode) => {
  console.log('registerLenderFail() FCK!')
  console.log(errorCode)
  dispatch({
    type: types.REGISTER_LENDER_FAILURE,
    payload: errorCode
  })
}

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