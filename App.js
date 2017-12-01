import React from "react";
import Expo, {Constants} from "expo";
import {Platform, StyleSheet, View} from "react-native";
import App from "./src/App";

export default class AppInit extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({isReady: true});
  }

  renderStatusBar() {
    if (Platform.OS === 'android')
      return <View style={styles.statusBar}/>;
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <App statusBar={this.renderStatusBar()}/>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#332fc2",
    height: Constants.statusBarHeight,
  }
});