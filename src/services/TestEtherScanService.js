import axios from 'axios'
const apiUrl = 'http://rinkeby.etherscan.io/api'
const apiKey = 'HV2XA43VKN29EK777RYNNU9HWFK1MIUMT2'

export const TestEtherScanService = () => ({
  /**
   * @name fetchTransactionList
   * @description get all transactions for the user
   *
   * @param walletAddress [string] user wallet address
   *
   * @return AxiosPromise server response
   * */
  fetchTransactionList (walletAddress) {
    const params = {
      module: 'account',
      action: 'txlist',
      address: walletAddress,
      apiKey
    }

    return axios.get(apiUrl, { params })
  }
})
