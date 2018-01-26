import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text, Share, Clipboard} from 'react-native'
import {Content, Container} from 'native-base'
import QRCode from 'react-native-qrcode'

class AddFunds extends Component {
  constructor () {
    super()
    this.state = {
      qrcode: null
    }
  }

  // Event Handlers
  onShareButtonPress () {
    Share.share({
      message: 'Wallet Address',
      url: 'http://www.celsius.network',
      title: 'Wallet Address'
    }, {
      // Android only:
      dialogTitle: 'Share Wallet Address',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    }).catch(error => {
      console.error(error)
    })
  }

  onCopyButtonPress () {
    Clipboard.setString(this.props.walletAddress)
  }

  // Component Lifecycle Methods
  async componentDidMount () {
    this.setState({qrcode: this.props.walletAddress})
  }

  // Rendering methods
  render () {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            <Container>
              <Content>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={[styles.backButton]}>
                  <Image source={require('../assets/images/icon-back.png')} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.header}>{'Add Funds'.toUpperCase()}</Text>
                <Text style={[{fontFamily: 'barlow'}, styles.text]}>Transfer your funds from another Ethereum wallet to
                  your Celsius account by sending ETH to your unique Celsius address.</Text>
                <View style={styles.center}>
                  <View style={styles.qrWrapper}>
                    <QRCode
                      value={this.props.walletAddress}
                      size={160}
                      bgColor='black'
                      fgColor='white' />
                  </View>
                </View>
                <Text style={[{fontFamily: 'barlow', marginBottom: 0}, styles.text]}>Your Celsius ETH address:</Text>
                <View style={styles.codeWrapper}>
                  <Text
                    style={[{fontFamily: 'inconsolata'}, styles.codeText]}>{this.props.walletAddress}</Text>
                  <View style={styles.row}>
                    <TouchableOpacity style={[styles.cellLeft, styles.buttonLeft]}
                      onPress={this.onShareButtonPress.bind(this)}>
                      <Image source={require('../assets/images/icon-send.png')} style={styles.iconLeft} />
                      <Text style={styles.buttonLeftText}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cellRight, styles.buttonRight]}
                      onPress={this.onCopyButtonPress.bind(this)}>
                      <Image source={require('../assets/images/icon-copy.png')} style={styles.iconRight} />
                      <Text style={styles.buttonRightText}>Copy</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.center}>
                  <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.button}>
                    <Text style={styles.buttonText}>Done</Text>
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
  },
  body: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  backButton: {
    position: 'absolute',
    zIndex: 10,
    left: 20,
    top: 40,
    width: 30
  },
  back: {
    width: 28,
    height: 24,
    resizeMode: 'contain'
  },
  logo: {
    width: 140,
    height: 40,
    marginLeft: 35,
    marginBottom: 5
  },
  header: {
    fontSize: 32,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#9CA9B6',
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 15,
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
    marginTop: 29,
    marginBottom: 30,
    width: 150
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'barlow-medium',
    fontSize: 21
  },
  form: {
    marginLeft: 20,
    marginRight: 20
  },
  center: {
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 40
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 40
  },
  qrWrapper: {
    width: 225,
    height: 225,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingTop: 34,
    marginTop: 20,
    marginBottom: 34
  },
  codeWrapper: {
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginRight: 60,
    marginLeft: 60,
    marginTop: 0,
    marginBottom: 20
  },
  codeText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  buttonLeft: {
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRightColor: '#3D4B54',
    borderRightWidth: 1,
    padding: 10,
    borderBottomLeftRadius: 8,
    justifyContent: 'center'
  },
  buttonLeftText: {
    color: '#9CA9B6',
    textAlign: 'left',
    paddingLeft: 5,
    fontFamily: 'barlow',
    fontSize: 18
  },
  buttonRight: {
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
    borderBottomRightRadius: 8,
    justifyContent: 'center'
  },
  buttonRightText: {
    color: '#9CA9B6',
    textAlign: 'left',
    paddingLeft: 5,
    fontFamily: 'barlow',
    fontSize: 18
  },
  iconLeft: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 5
  },
  iconRight: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 5
  }
})

const mapStateToProps = state => {
  return {
    nav: state.nav,
    walletAddress: state.lender.walletAddress
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddFunds)
