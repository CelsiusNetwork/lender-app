import {RestServiceClient} from './RestServiceClient'
import {CS_CELSIUS_API_URL, LENDER_PASSWORD_KEY} from 'react-native-dotenv'
import {getSecureStoreKey} from '../actions/SecureStoreActions'

export class WalletService extends RestServiceClient {
  constructor (token) {
    super(CS_CELSIUS_API_URL, {authorizationToken: token})
    this.token = token
    this.lenderEndPoint = '/api/v1/lender/tx'
  }

  /**
   * @name getBalance
   * @description get balance for the specific wallet address
   *
   * @param walletAddress [string] user wallet address
   *
   * @return Promise<Response>
   */
  getBalance (walletAddress) {
    return this.GET(`${this.lenderEndPoint}/balance/${walletAddress}`)
  }

  /**
   * @name sendETH (withdraw)
   * @description send ETH to another wallet address
   *
   * @param fromAddress [string] user wallet address
   * @param toAddress [string] where to send ETH
   * @param value [number] ETH amount
   *
   * @return Promise<Response>
   */
  async sendETH (fromAddress, toAddress, value) {
    const password = await getSecureStoreKey(LENDER_PASSWORD_KEY)
    return this.POST(`${this.lenderEndPoint}/eth/send`, {fromAddress, toAddress, value, password})
  }
}
