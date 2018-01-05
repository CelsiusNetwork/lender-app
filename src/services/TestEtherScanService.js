const apiUrl = 'http://rinkeby.etherscan.io/api?module=account'
const apiKey = 'HV2XA43VKN29EK777RYNNU9HWFK1MIUMT2'

export const TestEtherScanService = () => ({
  fetchTransactionList () {
    const walletAddress = '0xe97593a00882369600beaaf690a0fa51a6e07a0b'
    const request = {
      method: 'get'
    }
    return fetch(apiUrl + '&action=txlist&address=0xe97593a00882369600beaaf690a0fa51a6e07a0b&apikey=HV2XA43VKN29EK777RYNNU9HWFK1MIUMT2', request)
  }
})