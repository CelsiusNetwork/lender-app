import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Content, Header, Title, Container } from 'native-base'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Font } from 'expo';

class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fontLoaded: false,
      }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'inconsolata': require('../../../assets/fonts/Inconsolata-Regular.ttf'),
    });
    await Font.loadAsync({
      'barlow-semi-bold': require('../../../assets/fonts/Barlow-SemiBold.otf'),
    });
    await Font.loadAsync({
      'barlow-light': require('../../../assets/fonts/Barlow-Light.otf'),
    });
    await Font.loadAsync({
      'barlow-bold': require('../../../assets/fonts/Barlow-Bold.otf'),
    });
    await Font.loadAsync({
      'barlow': require('../../../assets/fonts/Barlow-Regular.otf'),
    });
    this.setState({ fontLoaded: true });
  }

  static navigationOptions = {
    header: null
  }

  onButtonPress () {
    this.props.lenderAppInitToken()
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Container>
          <Content>

            <Image source={require('../../../assets/images/logo-header.png')} style={styles.logo} />
            { this.state.fontLoaded ? (<Text style={[{ fontFamily: 'barlow-bold'}, styles.header]}>{'How it works?'.toUpperCase()}</Text>) : null }
            {/* <Text style={styles.header}>{'How it works?'.toUpperCase()}</Text> */}
            <View style={styles.circleWrapper}>
                  <Image
                    source={require('../../../assets/images/arrow-left.png')}
                    resizeMode="contain"
                    style={styles.aLeft} />
                  <Image source={require('../../../assets/images/how-it-works.png')} style={styles.circle} />
                  <Image
                    source={require('../../../assets/images/arrow-right.png')}
                    resizeMode="contain"
                    style={styles.aRight} />
            </View>

            { this.state.fontLoaded ? (<Text style={[{ fontFamily: 'barlow'}, styles.text]}>To join our trusted community of members, you need to create Celsius account from which you will be able to lend and borrow money.</Text>) : null }
            {/* <Text style={styles.text}>To join our trusted community of members, you need to create Celsius account from which you will be able to lend and borrow money.</Text> */}

            <TouchableOpacity style={styles.button}
              onPress={this.onButtonPress.bind(this)}
              //onPress={() => navigate('Register')}
              >
              { this.state.fontLoaded ? (<Text style={[{ fontFamily: 'barlow'}, styles.buttonText]}>Create account</Text>) : null }
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginTouchable} onPress={() => navigate('LoginForm')}>
              { this.state.fontLoaded ? (<Text style={[{ fontFamily: 'barlow'}, styles.loginText]}>Already have one?</Text>) : null }
            </TouchableOpacity>

          </Content>
        </Container>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1
  },
  header: {
    fontSize: 38,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 160
  },
  text: {
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#9CA9B6',
    padding: 30,
    lineHeight: 20,
    textAlign: 'center'

  },
  logo: {
    position: 'absolute',
    width: 128,
    height: 40,
    left: 30,
    top: 60,
    resizeMode: 'contain'
  },
  circleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 180,
    marginTop: 40,
    marginBottom: 20
  },
  aLeft: {
    width: 20,
    height: 37,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 0
  },
  aRight: {
    width: 20,
    height: 37,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 0
  },
  circle: {
    width: 186,
    height: 186
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 43,
    marginLeft: 43
  },
  buttonText: {
    color: '#3D4853',
    fontSize: 21
  },
  loginTouchable: {
    marginTop: 25,
    marginRight: 30,
    marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  loginText: {
    backgroundColor: 'transparent',
    color: 'rgba(156, 169, 182, 0.3)',
    fontSize: 18
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorks)
