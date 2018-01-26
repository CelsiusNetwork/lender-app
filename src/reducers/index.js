import { combineReducers } from 'redux'

import AppTokenReducer from './AppTokenReducer'
import LoginReducer from './LoginReducer'
import NavigatorReducer from './NavigatorReducer'
import LenderReducer from './LenderReducer'
import WalletBalance from './WalletBalance'
import WithdrawETHReducer from './WithdrawETHReducer'
import TransactionsReducer from './TransactionsReducer'

export default combineReducers({
  auth: LoginReducer,
  nav: NavigatorReducer,
  initToken: AppTokenReducer,
  lender: LenderReducer,
  wallet: WalletBalance,
  withdrawETH: WithdrawETHReducer,
  transactions: TransactionsReducer
})
