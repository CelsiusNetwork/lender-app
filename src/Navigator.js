import React from "react"
import { BackHandler } from "react-native"
import { connect } from "react-redux"
import { addNavigationHelpers, NavigationActions, StackNavigator } from "react-navigation"


import WelcomePager from "./components/welcome/WelcomePager"
// import WelcomePager from "./components/Verification"

import GraphPager from "./components/graph/GraphPager.js"
import HistoryDetail from "./components/graph/HistoryDetail.js"

import Register from './components/Register'
import LoginForm from './components/LoginForm'
import ForgotPassword from './components/ForgotPassword'
import Passcode from './components/Passcode'

import Verification from './components/Verification'
import VerifyPhoneNumber from './components/VerifyPhoneNumber'
import VerifyDocument from './components/VerifyDocument'
import VerifyPhoto from './components/VerifyPhoto'
import Agree from './components/Agree'

import EditProfile from './components/EditProfile'
import AddFounds from './components/AddFounds'
import ManageFounds from './components/ManageFounds'
import ManageFoundsWithdraw from './components/ManageFoundsWithdraw'
import ManageFoundsConfirm from './components/ManageFoundsConfirm'
import QRScanner from './components/QRScanner'
import ManageFoundsSuccess from './components/ManageFoundsSuccess'

import Home from './components/Home'

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
  AddFounds: {
    screen: AddFounds,
    headerMode: 'screen'
  },
  ManageFounds: {
    screen: ManageFounds,
    headerMode: 'screen'
  },
  ManageFoundsWithdraw: {
    screen: ManageFoundsWithdraw,
    headerMode: 'screen'
  },
  ManageFoundsConfirm: {
    screen: ManageFoundsConfirm,
    headerMode: 'screen'
  },
  QRScanner: {
    screen: QRScanner,
    headerMode: 'screen'
  },
  ManageFoundsSuccess: {
    screen: ManageFoundsSuccess,
    headerMode: 'screen'
  }
}, {
  // see next line
  headerMode: 'none',
});

class LenderNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  }

  render() {
    const { dispatch, nav } = this.props;
    // passing navigation prop (consisting of dispatch and state) to Navigator
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav
    });

    return <Navigator navigation = { navigation }
    />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(LenderNavigation)