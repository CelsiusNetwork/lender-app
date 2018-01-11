import axios from 'axios';
const apiUrl = 'http://rinkeby.etherscan.io/api'
const apiKey = 'HV2XA43VKN29EK777RYNNU9HWFK1MIUMT2'

export const TestEtherScanService = () => ({
  fetchTransactionList (walletAddress) {
    console.log('asdasdas'+walletAddress)
    //walletAddress = '0xe97593a00882369600beaaf690a0fa51a6e07a0b'
    const params = {
      module: 'account',
      action: 'txlist',
      address: walletAddress,
      apikey: apiKey,
    };

    return axios.get(apiUrl, { params });
  }
})