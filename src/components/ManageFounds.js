import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View, ImageBackground, Image, TouchableOpacity} from 'react-native'
import {Text, Content, Container} from 'native-base'
import {
  registerFirstNameChanged,
  registerLastNameChanged,
  registerEmailChanged,
  registerPasswordChanged,
  registerPhoneNumberChanged,
  registerLender
} from '../actions'
import {Font} from 'expo'

// import QRCode from 'react-native-qrcode'

class AddFounds extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fontLoaded: false,

      eth: 10.000,
      ethFiat: '≈ $8,095.10',
      ethChange: ' ▲ +5.84%',

      deg: 2.984,
      degFiat: '≈ $0.02',
      degChange: ' ▲ +0.01%'
    }
  }

  async componentDidMount () {
    await Font.loadAsync({
      'inconsolata': require('../../assets/fonts/Inconsolata-Regular.ttf')
    })
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
    const {navigate} = this.props.navigation
    const ethBalance = this.props.ethBalance
    const celBalance = this.props.celBalance
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            {/* <Image source={require('../../assets/images/logo-header.png')} style={styles.logo} /> */}
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={[styles.backButton]}>
              <Image source={require('../../assets/images/icon-back.png')} style={styles.back} />
            </TouchableOpacity>

            <Container>
              <Content>
                <Text style={styles.header}>MANAGE {'\n'} FUNDS</Text>
                <Text style={styles.text}>You can safely withdraw your funds in <Text style={{color: '#ffffff'}}>7
                  days</Text> from now. If you do it earlier, you may lose seniority score and additional fees may
                  apply. </Text>
                <View style={styles.center}>

                  <View style={styles.boxWrapper}>
                    <View style={styles.box}>
                      <Image source={require('../../assets/images/icon-eth.png')} style={styles.icon} />
                      <Text style={styles.boxText1}>
                        {this.state.fontLoaded ? (<Text
                          style={[{fontFamily: 'barlow-semi-bold'}, styles.boxText1Inner]}>{parseInt(ethBalance).toFixed(3)}</Text>) : null}
                        {this.state.fontLoaded ? (
                          <Text style={[{fontFamily: 'barlow-semi-bold'}, styles.boxText1Inner]}> ETH</Text>) : null}
                      </Text>
                      <Text style={styles.boxText2}>
                        {this.state.fontLoaded ? (<Text style={[{fontFamily: 'barlow-light'}, styles.boxText2Inner]}>=
                          ${(ethBalance * 1250).toFixed(2)}</Text>) : null}
                        {this.state.fontLoaded ? (<Text
                          style={[styles.changeUp, {fontFamily: 'barlow-light'}]}> {this.state.ethChange}</Text>) : null}
                      </Text>
                      <Image source={require('../../assets/images/graph1.png')} style={styles.graph} />
                      <TouchableOpacity style={styles.boxButton} onPress={() => navigate('ManageFoundsWithdraw')}>
                        <Text style={styles.boxButtonText}><Image
                          source={require('../../assets/images/icon-transfer-arrows.png')}
                          style={styles.buttonIcon} /><Text style={{color: '#ffffff', fontFamily: 'barlow'}}>{'   '}Withdraw ETH</Text></Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.center}>

                  <View style={styles.boxWrapper}>
                    <View style={styles.box}>
                      <Image source={require('../../assets/images/icon-transfer.png')} style={styles.icon} />
                      <Text style={styles.boxText1}>
                        {this.state.fontLoaded ? (<Text
                          style={[{fontFamily: 'barlow-semi-bold'}, styles.boxText1Inner]}>{parseInt(celBalance).toFixed(3)}</Text>) : null}
                        {this.state.fontLoaded ? (
                          <Text style={[{fontFamily: 'barlow-semi-bold'}, styles.boxText1Inner]}> CEL</Text>) : null}
                      </Text>
                      <Text style={styles.boxText2}>
                        {this.state.fontLoaded ? (<Text
                          style={[{fontFamily: 'barlow-light'}, styles.boxText2Inner]}>{this.state.degFiat}</Text>) : null}
                        {this.state.fontLoaded ? (<Text
                          style={[styles.changeUp, {fontFamily: 'barlow-light'}]}> {this.state.degChange}</Text>) : null}
                      </Text>
                      <Image source={require('../../assets/images/graph1.png')} style={styles.graph} />
                      <TouchableOpacity style={styles.boxButton}>
                        <Text style={styles.boxButtonTextDisabled}>Withdraw coming soon…</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>

                <View style={styles.center}>
                  <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.buttonText}>
                      Close
                    </Text>
                  </TouchableOpacity>
                </View>
              </Content>
            </Container>
          </View>

        </ImageBackground>
      </View>

    )
  }

  renderError () {
    if (this.props.error !== '') {
      return (<Text style={styles.errorText}>{this.props.error}</Text>)
    }
    return <View />
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
    marginRight: 10,
    marginTop: 20
  },
  logo: {
    // position: 'absolute',
    width: 140,
    height: 40,
    marginLeft: 35,
    marginBottom: 5
  },
  header: {
    fontSize: 38,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40
  },
  backButton: {
    position: 'absolute',
    zIndex: 10,
    left: 20,
    top: 60,
    width: 30
  },
  back: {
    width: 28,
    height: 24,
    resizeMode: 'contain'
  },

  boxText1: {
    position: 'absolute',
    left: 50,
    // right: 0,
    top: 0,
    fontSize: 42,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    flexWrap: 'wrap'
  },
  boxText1Inner: {
    fontSize: 30,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    // paddingLeft: 30,
    // paddingRight: 30,
    // marginBottom: 10,
    fontWeight: 'bold',
    // textAlign: 'center',
    // marginTop: 20,
    flexDirection: 'column'
  },
  boxText2: {
    position: 'absolute',
    left: 40,
    top: 60,
    fontSize: 24,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#9CA9B6',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0,
    flexWrap: 'wrap'
  },
  boxText2Inner: {
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#9CA9B6',
    // paddingLeft: 30,
    // paddingRight: 30,
    // marginBottom: 10,
    fontWeight: 'bold',
    // textAlign: 'center',
    // marginTop: 20,
    flexDirection: 'column'
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#9CA9B6',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 32,
    fontFamily: 'barlow'
  },
  formContainer: {
    marginTop: 100
  },
  floatingLabel: {
    color: '#9CA9B6',
    fontSize: 12
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 30,
    // marginLeft: 30,
    marginTop: 30,
    marginBottom: 10,
    width: 130
  },
  buttonText: {
    color: '#ffffff'
  },
  form: {
    marginLeft: 20,
    marginRight: 20
  },
  center: {
    // flex: 1,
    // flexDirection: 'row',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
    // height: 50,
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginLeft: 10,
    height: 40
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginRight: 10,
    height: 40
  },
  boxWrapper: {
    width: '100%'
    // flex: 1,
    // borderColor: 'red',
    // borderWidth: 1,
    // flexDirection: 'row',
  },
  box: {
    // width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    // flex: 1,
    // flexDirection: 'row',
    // position: 'relative',
    alignItems: 'center',
    paddingTop: 90
  },
  changeUp: {
    fontSize: 18,
    color: '#47CA53'
  },
  changeDown: {
    fontSize: 18,
    color: '#ff3333'
  },
  graph: {
    width: '90%',
    height: 60,
    marginBottom: 5,
    // marginLeft: 10,
    // marginRight: 10,
    resizeMode: 'contain'
  },
  icon: {
    width: 40,
    height: 42,
    position: 'absolute',
    top: 20,
    left: 10,
    resizeMode: 'contain'
  },
  boxButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: '100%',
    height: 42,
    alignItems: 'center',
    position: 'relative',
    paddingTop: 10
  },
  boxButtonText: {
    color: '#9CA9B6',
    fontSize: 18,
    paddingLeft: 5
  },
  boxButtonTextDisabled: {
    color: 'rgba(156, 169, 182, 0.3)',
    fontSize: 18
  },
  buttonIcon: {
    // position: 'absolute',
    // left: 50,
    // top: 15,
    width: 20,
    height: 16,
    resizeMode: 'contain',
    marginTop: 3
  }
})

const mapStateToProps = state => {
  return {
    nav: state.nav,
    ethBalance: state.wallet.ethBalance,
    celBalance: state.wallet.celBalance
    // error: state.register.error

  }
}

const mapDispatchToProps = {
  registerFirstNameChanged,
  registerLastNameChanged,
  registerEmailChanged,
  registerPasswordChanged,
  registerPhoneNumberChanged,
  registerLender
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFounds)
