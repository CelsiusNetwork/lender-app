import { NavigationActions } from 'react-navigation'

import * as types from './Types'
import Expo, { SecureStore } from 'expo'
import getAppToken from '../services/Auth0Service'

export const lenderAppInitToken = (clientId, clientSecret, audience, grantType) => {
  return (dispatch) => {
    dispatch({
      type: types.APP_TOKEN_INIT
    })

    getAppToken().then((tokenData) => {
      lenderAppTokenInitSuccess(dispatch, tokenData)
    }).catch((error) => {
      lenderAppTokenInitFail(dispatch, error)
      console.log(error)
    })
    const request = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        audience: audience,
        grant_type: grantType
      })
    }
    fetch('https://celsiusnetwork.auth0.com/oauth/token', request)
      .then((response) => lenderAppTokenInitSuccess(dispatch, response))
      .catch((err) => lenderAppTokenInitFail(dispatch, err))
  }
}

const lenderAppTokenInitFail = (dispatch, errorCode) => {
  console.log('lenderAppTokenInitFail() FCK!')
  console.log(errorCode)
  dispatch({
    type: types.APP_TOKEN_FAILURE,
    payload: errorCode
  })
}

const lenderAppTokenInitSuccess = async(dispatch, data) => {
  console.log('lenderAppTokenInitSuccess() WOOHOO!')
  data = JSON.parse(data._bodyText) // because of reasons
  console.log(data)
  Expo.SecureStore.setItemAsync('token', data.access_token)
  dispatch({
    type: types.APP_TOKEN_SUCCESS,
    payload: data
  })
  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Register' })
    ]
  }))
}