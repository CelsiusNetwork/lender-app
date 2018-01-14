import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View, Image, Text} from 'react-native'
import {Content, Container, Input} from 'native-base'
import {Font} from 'expo'

class VerifyPhoneNumber extends Component {
  constructor () {
    super()
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount () {
    await Font.loadAsync({
      'barlow-semi-bold': require('../../assets/fonts/Barlow-SemiBold.otf')
    })
    await Font.loadAsync({
      'barlow-light': require('../../assets/fonts/Barlow-Light.otf')
    })
    await Font.loadAsync({
      'barlow': require('../../assets/fonts/Barlow-Regular.otf')
    })
    this.setState({fontLoaded: true})
  }

  render () {
    return (
      <Container>
        <Content>
          <View style={styles.aCenter}>
            <View style={styles.mobileWrapper}>
              <Image source={require('../../assets/images/icon-mobile.png')} style={styles.mobile} />
            </View>
            <Text style={styles.text}>Phone number enables you 2-factor authentication. Please enter the code we’ve sent
              you via SMS.</Text>
            <View style={styles.inputWrapper}>
              <Input
                style={styles.input}
                keyboardType='numeric'
                maxLength={6}
                // placeholder='_ _ _ _ _ _'
                returnKeyType='done' autoCorrect={false} />
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0
  },
  background: {
    flex: 1,
    flexDirection: 'row'
    // justifyContent: 'top',
    // alignItems: 'center',
    // backgroundColor: 'red'
  },
  body: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  aCenter: {
    alignItems: 'center'
  },
  line: {
    borderRadius: 2,
    height: 4,
    marginBottom: 10
  },
  lineInner: {
    width: '33%',
    borderRadius: 2,
    height: 4
  },
  logo: {
    // flex: 1,
    // position: 'absolute',
    marginTop: 40,
    marginLeft: 30,
    width: 140,
    height: 40
  },
  header: {
    fontSize: 38,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 54,
    fontFamily: 'barlow-bold'
  },
  mobileWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    marginTop: 55,
    marginBottom: 22
  },
  mobile: {
    marginTop: 30
  },
  inputWrapper: {
    height: 70,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 1,
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 58,
    textAlign: 'center',
    fontFamily: 'barlow-semi-bold'
  },
  inputDash: {
    height: 2
  },
  text: {
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#9ca9b7',
    paddingLeft: 30,
    paddingRight: 30,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: 'barlow',
    marginTop: 22
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30
  },
  buttonText: {
    color: '#333333'
  }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPhoneNumber)
