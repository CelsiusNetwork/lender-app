import React from 'react'
import { Container } from 'native-base'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { View, Text, Image } from 'react-native';
import thunk from 'redux-thunk'
// import { Font } from 'expo'
import { Font, AppLoading, Asset } from "expo";

import reducers from './reducers/index'
import Navigator from './Navigator'

import { composeWithDevTools } from 'remote-redux-devtools';

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)))

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

class App extends React.Component {
  state = {
    isReady: false,
  };

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('../assets/images/background.png'),
      require('../assets/images/background-blur.png'),
    ]);

    // const fontAssets = cacheFonts([FontAwesome.font]);

    await Promise.all([...imageAssets]);
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });

    await Font.loadAsync({
      'barlow-medium': require('../assets/fonts/Barlow-Medium.ttf')
    })
    this.setState({ loading: false });
  }

  getState = () => {
    store.getState()
  }

  componentWillReceiveProps () {
  }

  render () {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <Container>
          <Navigator />
        </Container>
      </Provider>
    )
  }
}

export default (App)
