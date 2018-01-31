import {RestServiceClient} from './RestServiceClient'
import {CS_CELSIUS_API_URL} from 'react-native-dotenv'

export class CelsiusService extends RestServiceClient {
  constructor (token) {
    super(CS_CELSIUS_API_URL, {authorizationToken: token})
    this.token = token
  }

  /**
   * @name registerLender
   * @description register lender to application and create wallet
   *
   * @param payload [Object] contains user data from register form (firstName, lastName, email, password, phoneNumber)
   *
   * @return Promise<Response>
   * */
  registerLender (payload) {
    const {email, password, firstName, lastName, phoneNumber} = payload

    let request = {
      email,
      password,
      user_metadata: {
        name: firstName,
        surname: lastName,
        phone_number: phoneNumber
      },
      wallet: {
        password
      }
    }

    return this.POST(`/api/v1/lender/register`, request)
  }

  /**
   * @name getLenderRewardPoints
   * @description get lender reward points from /points/:wallet
   *
   * @param walletAddress {string}
   *
   * @return Promise<Response>
   * */
  getLenderRewardPoints (walletAddress) {
    return this.GET(`/rewarder/points/${walletAddress}`)
  }
}
