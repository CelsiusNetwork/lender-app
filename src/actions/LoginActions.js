import * as types from './Types'
import { Auth0Service } from '../services'
import { NavigationActions } from 'react-navigation'
import jwtDecode from 'jwt-decode'
import { storeLoggedUser } from './index'
import {ErrorModel} from '../models/ErrorModel'
import * as CryptoJS from 'crypto-js'
import {LENDER_PASSWORD_KEY} from 'react-native-dotenv'
import {setSecureStoreKey} from './SecureStoreActions'

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
    dispatch({type: types.LOGIN_LENDER_LOADING})

    let service = new Auth0Service()
    service.signInWithEmailAndPassword({ email, password })
      .then(response => handleResponse(dispatch, response, password))
  }
}

export const logoutLender = () => {
  return (dispatch) => {
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Welcome' })
      ]
    }))
  }
}

const handleResponse = (dispatch, response, password) => {
  if (response instanceof ErrorModel) {
    loginLenderFail(dispatch, response.statusCode)
  } else {
    const { id_token } = response
    const lender = jwtDecode(id_token)

    dispatch({
      type: types.FETCH_LENDER_LOADING
    })

    const service = new Auth0Service(id_token)
    service.getUser(lender.sub)
      .then(response => handleLenderInfo(dispatch, response, password))

    dispatch({
      type: types.LOGIN_LENDER_SUCCESS,
      payload: { lender, id_token }
    })
  }
}

const handleLenderInfo = async (dispatch, response, password) => {
  dispatch({
    type: types.FETCH_LENDER_SUCCESS,
    payload: response
  })

  // set user id in secure store
  storeLoggedUser(response.user_id).then(() => {
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' })
      ]
    }))
  }).catch(error => {
    console.error(error)
  })

  const hash = CryptoJS.SHA256(password)
  await setSecureStoreKey(LENDER_PASSWORD_KEY, hash.toString())
}

const loginLenderFail = (dispatch, error) => {
  dispatch({type: types.LOGIN_LENDER_FAIL, payload: error})
}
