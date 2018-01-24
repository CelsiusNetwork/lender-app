const apiUrl = 'https://cs.celsius.network/cs/api/v1/lender'

export const WalletService = () => ({
  /**
   * @name getBalance
   * @description get balance for the specific wallet address
   *
   * @param walletAddress [string] user wallet address
   * @param token [string] oAuth access token
   *
   * @return Promise server response
   */
  getBalance (walletAddress, token) {
    const request = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      method: 'get'
    }
    return fetch(apiUrl + '/tx/balance/' + walletAddress, request)
  },

  /**
   * @name sendETH (withdraw)
   * @description send ETH to another wallet address
   *
   * @param password [string] user plain password
   * @param fromAddress [string] user wallet address
   * @param toAddress [string] where to send ETH
   * @param value [number] ETH amount
   * @param token [string] oAuth user access token
   *
   * @return Promise server response
   */
  sendETH (password, fromAddress, toAddress, value, token) {
    const request = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      method: 'post',
      body: JSON.stringify({
        fromAddress: fromAddress,
        toAddress: toAddress,
        value: value
      })
    }
    return fetch(apiUrl + '/tx/eth/send', request)
  }

})
