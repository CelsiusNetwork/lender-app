import React from 'react'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers, NavigationActions, StackNavigator } from 'react-navigation'

// Components
import EditProfile from './components/EditProfile/EditProfile'
import AddFunds from './components/AddFunds/AddFunds'
import LoginForm from './components/LoginForm/LoginForm'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import WelcomePager from './components/welcome/WelcomePager'
import GraphPager from './components/graph/GraphPager.js'
import HistoryDetail from './components/HistoryDetail/HistoryDetail.js'
import Register from './components/Register/Register'
import Passcode from './components/Passcode'
import Verification from './components/Verification'
import VerifyPhoneNumber from './components/VerifyPhoneNumber'
import VerifyDocument from './components/VerifyDocument'
import VerifyPhoto from './components/VerifyPhoto'
import Agree from './components/Agree'
import ManageFunds from './components/ManageFunds'
import ManageFundsWithdraw from './components/ManageFundsWithdraw'
import ManageFundsConfirm from './components/ManageFundsConfirm'
import QRScanner from './components/QRScanner'
import ManageFundsSuccess from './components/ManageFundsSuccess'
import ManageFundsError from './components/ManageFundsError'
import Home from './components/Home'
// NOTE: plop Screen imports new screen here

export const Navigator = StackNavigator({
  LoginForm: {
    screen: LoginForm,
    headerMode: 'screen'
  },
  Welcome: {
    screen: WelcomePager,
    headerMode: 'screen'
  },
  Register: {
    screen: Register,
    headerMode: 'screen'
  },
  ForgotPassword: {
    screen: ForgotPassword,
    headerMode: 'screen'
  },
  Verification: {
    screen: Verification,
    headerMode: 'screen'
  },
  VerifyPhoneNumber: {
    screen: VerifyPhoneNumber,
    headerMode: 'screen'
  },
  VerifyDocument: {
    screen: VerifyDocument,
    headerMode: 'screen'
  },
  VerifyPhoto: {
    screen: VerifyPhoto,
    headerMode: 'screen'
  },
  Agree: {
    screen: Agree,
    headerMode: 'screen'
  },
  Passcode: {
    screen: Passcode,
    headerMode: 'screen'
  },
  Home: {
    screen: Home,
    headerMode: 'screen'
  },
  Graph: {
    screen: GraphPager,
    headerMode: 'screen'
  },
  HistoryDetail: {
    screen: HistoryDetail,
    headerMode: 'screen'
  },
  EditProfile: {
    screen: EditProfile,
    headerMode: 'screen'
  },
  AddFunds: {
    screen: AddFunds,
    headerMode: 'screen'
  },
  ManageFunds: {
    screen: ManageFunds,
    headerMode: 'screen'
  },
  ManageFundsWithdraw: {
    screen: ManageFundsWithdraw,
    headerMode: 'screen'
  },
  ManageFundsConfirm: {
    screen: ManageFundsConfirm,
    headerMode: 'screen'
  },
  QRScanner: {
    screen: QRScanner,
    headerMode: 'screen'
  },
  ManageFundsSuccess: {
    screen: ManageFundsSuccess,
    headerMode: 'screen'
  },
  ManageFundsError: {
    screen: ManageFundsError,
    headerMode: 'screen'
  // NOTE: plop Screen inserts screen here
  }
}, {
  headerMode: 'none'
})

class LenderNavigation extends React.Component {
  // Event Handlers
  onBackPress () {
    const { dispatch, nav } = this.props

    if (nav.index === 0) {
      return false
    }

    dispatch(NavigationActions.back())
    return true
  }

  // Component Lifecycle Methods
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  // Rendering methods
  render () {
    const { dispatch, nav } = this.props

    const navigation = addNavigationHelpers({
      dispatch,
      state: nav
    })

    return <Navigator navigation={navigation}
    />
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(LenderNavigation)
