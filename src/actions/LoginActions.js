import * as types from './Types'
import { Auth0Service } from '../services'
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
    console.log('loginLender() email pass:')
    console.log(email)
    console.log(password)
    Auth0Service().siginInWithEmailAndPassword({ email, password })
      .then((response) => loginLenderSuccess(dispatch, response))
      .catch((error) => loginLenderFail(dispatch, error))
  }
}

const loginLenderSuccess = (dispatch, response) => {
  console.log('loginLenderSuccess() response: ')
  console.log(response)
  const token = JSON.parse(response._bodyInit)
  dispatch({
    type: types.LOGIN_LENDER_SUCCESS,
    payload: token
  })
  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Home' })
    ]
  }))
}

const loginLenderFail = (dispatch, error) => {
  console.log('loginLenderFail() error:')
  console.debug(error)
  dispatch({
    type: types.LOGIN_LENDER_FAIL,
    payload: error
  })
}