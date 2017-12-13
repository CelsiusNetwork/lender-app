import * as types from './Types'
import { NavigationActions } from 'react-navigation'

export const lenderAppInitToken = (clientId, clientSecret, audience, grantType) => {
  return (dispatch) => {
    dispatch({
      type: types.APP_TOKEN_INIT
    })
    const seen = []
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
    const replacer = function (key, value) {
      if (value != null && typeof value === 'object') {
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
        client_id: clientId,
        client_secret: clientSecret,
        audience: audience,
        grant_type: grantType
      })
    }
    fetch('https://celsiusnetwork.auth0.com/oauth/token', request)
      .then(response => lenderAppTokenInitSuccess(dispatch, response))
      .then((responseData) => {
      })
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

const lenderAppTokenInitSuccess = (dispatch, token) => {
  console.log('lenderAppTokenInitSuccess() WOOHOO!')
  console.log(token._bodyInit)
  dispatch({
    type: types.APP_TOKEN_SUCCESS,
    payload: token._bodyInit
  })
  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({routeName: 'Register'})
    ]
  }))
}