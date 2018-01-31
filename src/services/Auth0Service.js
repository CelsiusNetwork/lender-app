import {RestServiceClient} from './RestServiceClient'
import {
  AUTH0_CELSIUS_API_URL,
  INIT_CLIENT_ID,
  INIT_CLIENT_SECRET,
  INIT_AUDIENCE,
  INIT_GRANT_TYPE,
  GRANT_TYPE,
  CLIENT_ID
} from 'react-native-dotenv'

export class Auth0Service extends RestServiceClient {
  constructor (token = undefined) {
    super(AUTH0_CELSIUS_API_URL, {authorizationToken: token})
    this.token = token
  }

  /**
   * @name signInWithEmailAndPassword
   * @description get access token with user credentials
   *
   * @param email [string] user email
   * @param password [string] plain user password
   *
   * @return Promise<Response>
   * */
  signInWithEmailAndPassword ({ email, password }) {
    const request = {
      grant_type: GRANT_TYPE,
      client_id: CLIENT_ID,
      username: email,
      password
    }

    return this.POST('/oauth/token', request)
  }

  /**
   * @name initCredentials
   * @description initialize client credentials
   *
   * @return Promise<Response>
   * */
  initClientCredentials () {
    const request = {
      client_id: INIT_CLIENT_ID,
      client_secret: INIT_CLIENT_SECRET,
      audience: INIT_AUDIENCE,
      grant_type: INIT_GRANT_TYPE
    }

    return this.POST('/oauth/token', request)
  }

  /**
   * @name getUser
   * @description Get specific user by userId
   *
   * @param token [String] user access token
   *
   * @return Promise<Response>
   * */
  getUser (token) {
    return this.GET(`/api/v2/users/${token}`)
  }
}
