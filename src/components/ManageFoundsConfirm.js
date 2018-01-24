import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View, ImageBackground, Image, TouchableOpacity} from 'react-native'
import {Form, Input, Item, Label, Text, Content, Container} from 'native-base'
import {Font} from 'expo'
import {withdrawETH} from '../actions'

class AddFounds extends Component {
  constructor (props) {
    super(props)
    this.state = {
      eth: 6.350,
      toAddress: '0x7328E5cAFC5C533334C98Fd9D860d8B92F263173'
    }
  }

  handleChangeToAddress (toAddress) {
    this.setState({toAddress})
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            {/* <Image source={require('../../assets/images/logo-header.png')} style={styles.logo} /> */}
            <Container>
              <Content>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={[styles.backButton]}>
                  <Image source={require('../../assets/images/icon-back.png')} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.header}>{this.props.withdrawAmount} {'ETH'.toUpperCase()}</Text>
                <TouchableOpacity style={styles.QRCodeWrapper} onPress={() => navigate('QRScanner')}
                  // onPress={() => navigate('VerifyPhoneNumber')}
                >
                  <Image source={require('../../assets/images/icon-scan-qrcode.png')} style={styles.QRCode} />
                </TouchableOpacity>
                <Form style={styles.form}>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: '#9CA9B6'}}>{'to'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.handleChangeToAddress.bind(this)}
                      value={this.state.toAddress}
                      autoCorrect={false}
                      // highlightColor="#00ACC1" // cyan600
                      autoFocus autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: '#9CA9B6'}}>{'note'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      value={this.state.note}
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>
                </Form>
                <View style={styles.center}>
                  <TouchableOpacity style={styles.button}
                    onPress={() => this.props.withdrawETH('test42!', this.props.walletAddress, this.state.toAddress, this.props.withdrawAmount, this.props.token)}>
                    <Text style={styles.buttonText} />
                    <Text style={styles.buttonText}>Confirm withdraw
                      <Image source={require('../../assets/images/icon-arrow.png')} style={styles.buttonIcon} />
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.center}>
                  {this.props.loading ? (
                    <Text style={styles.message}>Withdrawal should be completed in a few minutes. Check your transaction history for details.</Text>
                  ) : (
                    <Text /> // TODO (djs): remove empty element
                  )}
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
  message: {
    marginTop: 20,
    color: 'white',
    textAlign: 'center'
  },
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
    fontSize: 34,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 0,
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 21
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#9CA9B6',
    marginLeft: 30,
    marginRight: 30
  },
  formContainer: {
    marginTop: 100
  },
  floatingLabel: {
    color: '#9CA9B6',
    fontSize: 12
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 198,
    alignSelf: 'stretch'
  },
  buttonText: {
    color: '#333333',
    fontFamily: 'barlow-medium',
    fontSize: 21
  },
  form: {
    marginLeft: 20,
    marginRight: 20
  },
  label: {
    // color: '#9CA9B6',
    // fontSize: 12
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
  floatingWrapper: {
    position: 'relative',
    marginRight: 15
  },
  QRCodeWrapper: {
    position: 'absolute',
    top: 70,
    right: 10
  },
  QRCode: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  buttonIcon: {
    width: 10,
    height: 18,
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 3
  },
  backButton: {
    position: 'absolute',
    zIndex: 10,
    left: 10,
    top: 70,
    width: 30
  },
  back: {
    width: 28,
    height: 24,
    resizeMode: 'contain'
  },
})

const mapStateToProps = state => {
  return {
    loading: state.withdrawETH.loading,
    token: state.auth.token,
    name: state.auth.name,
    surname: state.auth.surname,
    email: state.auth.email,
    authId: state.auth.authId,
    walletAddress: state.lender.walletAddress,
    lender: state.lender,
    ethBalance: state.wallet.ethBalance,
    celBalance: state.wallet.celBalance,
    withdrawAmount: state.withdrawETH.withdrawAmount,
    // error: state.register.error,
    nav: state.nav
  }
}

const mapDispatchToProps = {
  withdrawETH
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFounds)
