import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View, ImageBackground, Image, TouchableOpacity} from 'react-native'
import {Text, Content, Container} from 'native-base'
import {setWithdrawAmount} from '../actions'

class ManageFoundsWithdraw extends Component {
  constructor () {
    super()
    this.state = {
      number: '',
      amount: ''
    }
  }

  _onPressButton (index) {
    // console.log(index)
    if (index === -1) {
      this.state.number = this.state.number.substring(0, this.state.number.length - 1)
    }
    if (this.state.number.length < 8) {
      if (index === '.') {
        if (this.state.number.includes('.')) {
          index = ''
        } else {
          index = '.'
        }
      }
      if (index !== -1) {
        this.state.number = this.state.number + index
      }
      // var fNumber = new Intl.NumberFormat().format(this.state.number);
      const fNumber = this.state.number
      this.setState({amount: fNumber})
    }
  }

  renderError () {
    if (this.props.error !== '') {
      return (<Text style={styles.errorText}>{this.props.error}</Text>)
    }
    return <View />
  }

  render () {
    const ethBalance = this.props.ethBalance

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/background.png')} style={styles.background}>
          <Container>
            <Content>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={[styles.backButton]}>
                <Image source={require('../assets/images/icon-back.png')} style={styles.back} />
              </TouchableOpacity>
              <View style={styles.wrapper}>
                <View style={styles.aCenter}>
                  <Text style={styles.header}>{'Withdraw'.toUpperCase()}</Text>
                </View>

                <View style={styles.aCenter}>
                  <Text style={styles.codeField}>
                    <Text style={[styles.codeFieldText, {fontFamily: 'barlow-semi-bold'}]}>{this.state.amount}</Text>
                  </Text>
                  <View style={styles.lineRow}>
                    <View style={styles.codeFieldLine} />
                  </View>
                  <Text style={styles.available}>{ethBalance} ETH Available</Text>
                  <View style={[styles.row, {marginTop: 30}]}>
                    <View
                      style={styles.aLeft}><TouchableOpacity onPress={this._onPressButton.bind(this, 1)}
                        style={styles.circle}>
                        <Text style={[styles.circleText, {fontFamily: 'helvetica-neue-lt'}]}>1</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.aMiddle}>
                      <TouchableOpacity onPress={this._onPressButton.bind(this, 2)} style={styles.circle}>
                        <Text style={[styles.circleText, {fontFamily: 'helvetica-neue-lt'}]}>2</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.aRight}>
                      <TouchableOpacity onPress={this._onPressButton.bind(this, 3)} style={styles.circle}>
                        <Text style={[styles.circleText, {fontFamily: 'helvetica-neue-lt'}]}>3</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.aLeft}>
                      <TouchableOpacity onPress={this._onPressButton.bind(this, 4)} style={styles.circle}>
                        <Text style={[styles.circleText, {fontFamily: 'helvetica-neue-lt'}]}>4</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.aMiddle}>
                      <TouchableOpacity onPress={this._onPressButton.bind(this, 5)} style={styles.circle}>
                        <Text style={[styles.circleText, {fontFamily: 'helvetica-neue-lt'}]}>5</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.aRight}>
                      <TouchableOpacity onPress={this._onPressButton.bind(this, 6)} style={styles.circle}>
                        <Text style={[styles.circleText, {fontFamily: 'helvetica-neue-lt'}]}>6</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.aLeft}>
                      <TouchableOpacity onPress={this._onPressButton.bind(this, 7)} style={styles.circle}>
                        <Text style={[styles.circleText, {fontFamily: 'helvetica-neue-lt'}]}>7</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.aMiddle}>
                      <TouchableOpacity onPress={this._onPressButton.bind(this, 8)} style={styles.circle}>
                        <Text style={[styles.circleText, {fontFamily: 'helvetica-neue-lt'}]}>8</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.aRight}>
                      <TouchableOpacity onPress={this._onPressButton.bind(this, 9)} style={styles.circle}>
                        <Text style={[styles.circleText, {fontFamily: 'helvetica-neue-lt'}]}>9</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.aLeft}>
                      <TouchableOpacity onPress={this._onPressButton.bind(this, '.')} style={styles.field}>
                        <Text style={[styles.circleText, {fontFamily: 'helvetica-neue-lt'}]}>.</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.aMiddle}>
                      <TouchableOpacity onPress={this._onPressButton.bind(this, 0)} style={styles.circle}>
                        <Text style={[styles.circleText, {fontFamily: 'helvetica-neue-lt'}]}>0</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.aRight}>
                      <TouchableOpacity onPress={this._onPressButton.bind(this, -1)} style={styles.field}>
                        <Image source={require('../assets/images/icon-delete.png')} style={styles.delete} />
                      </TouchableOpacity></View>
                  </View>

                  <View>
                    <TouchableOpacity
                      disabled={ethBalance < this.state.amount} style={styles.button}
                      onPress={() => this.props.setWithdrawAmount(this.state.amount)}>
                      <Text style={styles.buttonText}>
                        Withdraw ETH
                        <Image source={require('../assets/images/icon-arrow.png')} style={styles.buttonIcon} />
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {this.renderError()}
                </View>
              </View>
            </Content>
          </Container>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 30,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 55
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
  aCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  text: {
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#a3b0be',
    paddingLeft: 30,
    paddingRight: 30,
    lineHeight: 20
  },
  wrapper: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
    // borderWidth: 1,
    // borderColor: 'green'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 90
  },
  circle: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center'
  },
  circleText: {
    // fontFamily: 'helvetica-neue-lt',
    color: '#ffffff',
    fontSize: 38,
    paddingTop: 20
  },
  field: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center'
  },
  aLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  aRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10
  },
  aMiddle: {
    borderRadius: 40
  },
  dotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    marginLeft: 30,
    marginRight: 30
  },
  dotCell: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    borderColor: '#ffffff',
    borderWidth: 0.5,
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 30
  },
  bottomText: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#a3b0be',
    padding: 10
  },
  errorText: {
    padding: 5,
    color: '#ea0021'
  },
  codeField: {
    color: '#ffffff',
    textAlign: 'center',
    height: 70
  },
  codeFieldText: {
    fontSize: 58,

    color: '#ffffff'
  },
  lineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 10
  },
  codeFieldLine: {
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '100%',
    marginLeft: 20,
    marginRight: 20
  },
  available: {
    color: '#9CA9B6',
    fontSize: 18,
    fontFamily: 'barlow'
  },
  delete: {
    width: 36,
    height: 24,
    resizeMode: 'contain',
    marginTop: 30
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 20,
    marginTop: 56,
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: '#333333',
    fontFamily: 'barlow-medium',
    fontSize: 21
  },
  buttonIcon: {
    width: 10,
    height: 18,
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 3
  }
})

const mapStateToProps = state => {
  return {
    ethBalance: state.wallet.ethBalance,
    celBalance: state.wallet.celBalance,
    error: state.auth.error,
    nav: state.nav
  }
}

const mapDispatchToProps = {
  setWithdrawAmount
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageFoundsWithdraw)
