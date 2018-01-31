import * as types from '../actions/Types'

const APP_TOKEN_INITIAL_STATE = {
  'token': '',
  'expiresIn': 0,
  'tokenType': '',
  'loading': false
}

export default (state = APP_TOKEN_INITIAL_STATE, action) => {
  switch (action.type) {
    case types.APP_TOKEN_INIT:
      return { ...state, loading: true }

    case types.APP_TOKEN_SUCCESS:
      let payload = action.payload

      return {
        ...state,
        token: payload.access_token,
        expiresIn: payload.expires_in,
        tokenType: payload.token_type,
        loading: false
      }

    case types.APP_TOKEN_FAILURE:
      let errorMsg = 'Initial Lander App Token not received.'

      return { ...state, error: errorMsg, loading: false }

    default:
      return state
  }
}
