import * as types from './Types'
import { NavigationActions } from 'react-navigation'
import Expo, { SecureStore } from 'expo'

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

export const registerLender = ({ firstName, lastName, email, password, phoneNumber }) => {
  return (dispatch) => {
    dispatch({
      type: types.REGISTER_LENDER_LOADING
    })
    const token = Expo.SecureStore.getItemAsync('token')
    token.then((token) => {
      console.log(token)
      const request = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          email: email,
          password: password,
          user_metadata: {
            name: firstName,
            surname: lastName
          },
          wallet: {
            password: password
          }
        })
      }
      fetch('https://cs.celsius.network/cs/api/v1/member/register', request)
        .then(response => registerLenderSuccess(dispatch, response))
        .then((responseData) => {
          console.log(responseData)
        })
        .catch((err) => registerLenderFail(dispatch, err))
    })
  }
}

const registerLenderFail = (dispatch, errorCode) => {
  console.log('registerLenderFail() FCK!')
  console.log(errorCode)
  dispatch({
    type: types.REGISTER_LENDER_FAILURE,
    payload: errorCode
  })
}

const registerLenderSuccess = (dispatch, user) => {
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