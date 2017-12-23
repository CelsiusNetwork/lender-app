import React from "react"
import { BackHandler } from "react-native"
import { connect } from "react-redux"
import { addNavigationHelpers, NavigationActions, StackNavigator } from "react-navigation"


// import WelcomePager from "./components/welcome/WelcomePager"
import WelcomePager from "./components/Home"

import Register from './components/Register'
import LoginForm from './components/LoginForm'
import ForgotPassword from './components/ForgotPassword'
import Passcode from './components/Passcode'

import VerifyPhoneNumber from './components/VerifyPhoneNumber'
import VerifyDocument from './components/VerifyDocument'
import VerifyPhoto from './components/VerifyPhoto'
import Agree from './components/Agree'

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