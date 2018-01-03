const apiUrl = 'https://cs.celsius.network/cs/api/v1/lender'

export const WalletServices = () => ({
  checkBalance (walletAddress) {
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
    console.debug('service| sendETH(password, fromAddress, toAddress, value) return Promise')
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