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

export const registerLender = ({ firstName, lastName, email, password, phoneNumber }) => {
  return (dispatch) => {
    dispatch({
      type: types.REGISTER_LENDER_LOADING
    })
    const seen = []
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
    const replacer = function (key, value) {
      if (value != null && typeof value == 'object') {
        if (seen.indexOf(value) >= 0) {
          return
        }
        seen.push(value)
      }
      return value
    }
    const request = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': email,
        'password': password,
        'user_metadata': {
          'name': firstName,
          'surname': lastName
        },
        'wallet': {
          'password': password
        }
      }, replacer)
    }
  fetch('https://cs.celsius.network/cs/api/v1/member/register', request)
    .then(response => registerLenderSuccess(dispatch, response))
    .then((responseData) => {
      console.log(responseData)
    })
    .catch((err) => registerLenderFail(dispatch, err))
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
  dispatch({
    type: types.REGISTER_LENDER_SUCCESS,
    payload: user
  })
  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({routeName: 'Home'})
    ]
  }))
}