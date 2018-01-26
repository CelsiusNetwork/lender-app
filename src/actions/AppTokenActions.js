import { NavigationActions } from 'react-navigation'

import * as types from './Types'
import { Auth0Service } from '../services'
import {ErrorModel} from '../models/ErrorModel'

export const lenderAppInitToken = () => {
  return (dispatch) => {
    dispatch({type: types.APP_TOKEN_INIT})

    let service = new Auth0Service()
    service.initClientCredentials()
      .then(response => handleAppTokenInit(dispatch, response))
  }
}

const handleAppTokenInit = (dispatch, response) => {
  if (response instanceof ErrorModel) {
    dispatch({type: types.APP_TOKEN_FAILURE, payload: response.statusCode})
  } else {
    dispatch({type: types.APP_TOKEN_SUCCESS, payload: response})

    dispatch(NavigationActions.navigate({
      routeName: 'Register',
      actions: [
        NavigationActions.navigate({ routeName: 'Register' })
      ]
    }))
  }
}
