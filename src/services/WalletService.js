const apiUrl = 'https://cs.celsius.network/cs/api/v1/lender'

export const WalletService = () => ({
  getBalance (walletAddress) {
    const token = ''
    walletAddress = '0xa3ff80f1ac76798f1bc236230158586a7c29a66b'
    console.debug('service| getBalance(walletAddress) return Promise')
    const request = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token'
      },
      method: 'get'
    }
    return fetch(apiUrl + '/tx/balance/', request)
  },
  sendETH (password, fromAddress, toAddress, value) {
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        password: password,
        fromAddress: fromAddress,
        toAddress: toAddress,
        value: value
      })
    }
    return fetch(apiUrl + '/tx/eth/send', request)
  }

})