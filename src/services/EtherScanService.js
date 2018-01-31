import {RestServiceClient} from './RestServiceClient'
import {ETH_SCAN_API_URL, ETH_SCAN_API_KEY} from 'react-native-dotenv'

export class EtherScanService extends RestServiceClient {
  constructor () {
    super(ETH_SCAN_API_URL)
  }

  /**
   * @name fetchTransactionList
   * @description get all transactions for the user
   *
   * @param address [string] user wallet address
   *
   * @return Promise<AxiosResponse> server response
   * */
  fetchTransactionList (address) {
    return this.GET(`/api?module=account&action=txlist&address=${address}&apikey=${ETH_SCAN_API_KEY}`)
  }
}
