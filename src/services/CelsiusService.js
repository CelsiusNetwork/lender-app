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
    return this.POST(`/api/v1/lender/register`, payload)
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
