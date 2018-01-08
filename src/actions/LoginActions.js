import * as types from './Types'
import { Auth0Service } from '../services'
import { NavigationActions } from 'react-navigation'
import jwtDecode from 'jwt-decode'

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
      .then(response => handleResponse(dispatch, JSON.stringify(response)))
      .catch((error) => {
        loginLenderFail(dispatch, error)
      })
  }
}

export const fetchLenderInfo = (id, token) => {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_LENDER_LOADING
    })
    Auth0Service().getUser({ id, token })
      .then(response => handleLenderInfo(dispatch, response))
  }
}

const handleLenderInfo = (dispatch, response) => {
  response = JSON.parse(response)
  const user = JSON.parse(response._bodyInit)
  console.log('lenderInfo')
  console.log(response)
  dispatch({
    type: types.FETCH_LENDER_SUCCESS,
    payload: user
  })
}

const handleResponse = (dispatch, response) => {
  console.log('loginLenderSuccess() response: ')
  response = JSON.parse(response)
  const token = JSON.parse(response._bodyInit)
  const tokenId = token.id_token
  const lender = jwtDecode(tokenId)
  if (response.ok === true) {
    dispatch({
      type: types.LOGIN_LENDER_SUCCESS,
      payload: { lender, tokenId }
    })
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' })
      ]
    }))
  }
  if (response.ok === false) {
    loginLenderFail(dispatch, response.code)
  }
}

const loginLenderFail = (dispatch, error) => {
  console.log('loginLenderFail() error:')
  console.debug(error)
  dispatch({
    type: types.LOGIN_LENDER_FAIL,
    payload: error
  })
}