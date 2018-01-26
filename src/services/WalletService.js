import {RestServiceClient} from './RestServiceClient'
import {CS_CELSIUS_API_V1_URL} from 'react-native-dotenv'

export class WalletService extends RestServiceClient {
  constructor (token) {
    super(CS_CELSIUS_API_V1_URL, {authorizationToken: token})
    this.token = token
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
    return this.GET(`/lender/tx/balance/${walletAddress}`)
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
  sendETH (fromAddress, toAddress, value) {
    let body = JSON.stringify({
      fromAddress,
      toAddress,
      value
    })

    return this.POST(`/tx/eth/send`, body)
  }
}
