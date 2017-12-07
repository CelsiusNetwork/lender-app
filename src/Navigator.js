import React from "react";
import { BackHandler } from "react-native";
import { connect } from "react-redux";
import { addNavigationHelpers, NavigationActions, StackNavigator } from "react-navigation";


import Welcome from "./components/Welcome";
import HowItWorks from "./components/HowItWorks";

import Register from './components/Register';
import LoginForm from "./components/LoginForm";

import VerifyPhoneNumber from './components/VerifyPhoneNumber';
import VerifyDocument from './components/VerifyDocument';
import VerifyPhoto from './components/VerifyPhoto';

import Home from './components/Home';

export const Navigator = StackNavigator({

  Welcome: {
    screen: Welcome
  },
  HowItWorks: {
    screen: HowItWorks
  },
  Register: {
    screen: Register
  },
  LoginForm: {
    screen: LoginForm
  },
  VerifyPhoneNumber: {
    screen: VerifyPhoneNumber
  },
  VerifyDocument: {
    screen: VerifyDocument
  },
  VerifyPhoto: {
    screen: VerifyPhoto
  },
  Home: {
    screen: Home
  }

});

class Navigation extends React.Component {
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
  };

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

export default connect(mapStateToProps)(Navigation);