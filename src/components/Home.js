import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import {Content, Container} from 'native-base'
import {Pages} from 'react-native-pages'
import DegIncome from './graph/DegIncome'
import DegValue from './graph/DegValue'
import IncomeHistory from './graph/IncomeHistory'
import {fetchWalletBalance, fetchTransactionsHistory, setActiveTransaction, lenderAppInitToken} from '../actions'
import {Font} from 'expo'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fontLoaded: false,
      eth: 10.000,
      deg: 2.984,
      change: ' ▲ +3.24%',
      user: {
        name: 'Alex'
      }
    }
    console.log('props: ')
    console.log(props)

    this.fetchingInterval = null
  }

  componentWillMount () {
    const {props} = this
    this.fetchingInterval = setInterval(() => {
      props.fetchWalletBalance(props.walletAddress, props.token)
    }, 5000)
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

  componentWillReceiveProps (nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    console.log('received props: ')
    console.log(nextProps)
    this.props = nextProps
  }

  componentWillUnmount () {
    clearInterval(this.fetchingInterval)
  }

  render () {
    const {navigate} = this.props.navigation
    const ethBalance = this.props.ethBalance || '0.00'
    const celBalance = this.props.celBalance || '0.00'
    const name = this.props.lender.name

    if (parseFloat(ethBalance) === 0) {
      return (
        <View style={styles.container}>
          <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
            <View style={styles.body}>
              <View style={[styles.row, {marginBottom: 20, marginTop: 60}]}>
                <View style={styles.cellLeft}>
                  <Image source={require('../../assets/images/Celsius_Symbol_white.png')} style={styles.logo} />
                </View>
                <TouchableOpacity onPress={() => navigate('EditProfile')}>
                  <View style={styles.cellRight}>
                    <Image source={require('../../assets/images/icon-user.png')} style={styles.user} />
                  </View>
                </TouchableOpacity>
              </View>
              <Container style={styles.wrapper}>
                <Content>
                  <Text style={styles.header}>
                    <Text>{ethBalance}</Text>
                    <Text> ETH</Text>
                  </Text>
                  <Text style={styles.header2}>
                    <Text>{celBalance}</Text>
                    <Text> CEL</Text>
                  </Text>
                  <View style={styles.btnsContainer}>
                    <View style={styles.cellLeft}>
                      <TouchableOpacity style={styles.button} onPress={() => navigate('AddFounds')}>
                        <Text style={styles.buttonText}>Add funds</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.hr} />

                  <Text style={styles.welcomeTitle}>Welcome to Celsius, {name}!</Text>
                  <Text style={styles.welcomeText}>As a member of Celsius community, you can lend ETH and earn DEG token
                    for the time you spend with us.</Text>
                  <View style={styles.hr} />
                  <TouchableOpacity style={styles.box}>
                    <View style={styles.boxIconWrapper}>
                      <Image source={require('../../assets/images/icon-wallet.png')} style={styles.icon} />
                    </View>
                    <View style={styles.boxTextWrapper}>
                      <Text style={styles.boxText}>Transfer funds to your newly created Celsius wallet to start earning
                        more on top of it.</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.box}>
                    <View style={styles.boxIconWrapper}>
                      <Image source={require('../../assets/images/icon-transfer.png')} style={styles.icon} />
                    </View>
                    <View style={styles.boxTextWrapper}>
                      <Text style={styles.boxText}>By lending money to borrowers, you earn Degree which you can later on
                        sell on the market.</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.box}>
                    <View style={styles.boxIconWrapper}>
                      <Image source={require('../../assets/images/icon-network.png')} style={styles.icon} />
                    </View>
                    <View style={styles.boxTextWrapper}>
                      <Text style={styles.boxText}>Improve your seniority score by sticking longer with Celsius and earn
                        more Degree.</Text>
                    </View>
                  </TouchableOpacity>
                </Content>
              </Container>
            </View>
          </ImageBackground>
        </View>

      )
    } else {
      return (
        <View style={stylesGraph.container}>
          <ImageBackground
            source={require('../../assets/images/background.png')}
            style={stylesGraph.background}>
            <View style={stylesGraph.header}>
              <View style={stylesGraph.cellLeft}>
                <TouchableOpacity onPress={() => navigate('Home')}>
                  <Image source={require('../../assets/images/logo-small.png')} style={stylesGraph.logo} />
                </TouchableOpacity>
              </View>
              <View style={stylesGraph.cellRight}>
                <TouchableOpacity onPress={() => navigate('EditProfile')}>
                  <Image source={require('../../assets/images/icon-user.png')} style={stylesGraph.user} />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={stylesGraph.headerText}>
              {this.state.fontLoaded ? (<Text style={[{fontFamily: 'barlow-semi-bold'}]}>{ethBalance}</Text>) : null}
              {this.state.fontLoaded ? (<Text style={[{fontFamily: 'barlow-semi-bold'}]}> ETH</Text>) : null}
            </Text>
            <Text style={stylesGraph.header2Text}>
              {this.state.fontLoaded ? (<Text style={[{fontFamily: 'barlow-light'}]}>{celBalance}</Text>) : null}
              {this.state.fontLoaded ? (<Text style={[{fontFamily: 'barlow-light'}]}> CEL</Text>) : null}
              {this.state.fontLoaded ? (
                <Text style={[stylesGraph.changeUp, {fontFamily: 'barlow-light'}]}> {this.state.change}</Text>) : null}
            </Text>

            <View style={stylesGraph.row}>
              <View style={stylesGraph.buttonCellLeft}>
                <TouchableOpacity style={stylesGraph.button} onPress={() => navigate('AddFounds')}>
                  <Text style={stylesGraph.buttonText}>Add funds</Text>
                </TouchableOpacity>
              </View>
              <View style={stylesGraph.buttonCellRight}>
                <TouchableOpacity style={stylesGraph.button2} onPress={() => navigate('ManageFounds')}>
                  <Text style={stylesGraph.button2Text}>Manage</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={stylesGraph.pagesWrapper}>
              <Pages style={stylesGraph.pages}>
                <DegIncome navigation={this.props.navigation} lenderAppInitToken={this.props.lenderAppInitToken} />
                <DegValue navigation={this.props.navigation} lenderAppInitToken={this.props.lenderAppInitToken} />
                <IncomeHistory
                  navigation={this.props.navigation}
                  lenderAppInitToken={this.props.lenderAppInitToken}
                  fetchTransactionsHistory={this.props.fetchTransactionsHistory}
                  transactions={this.props.transactions}
                  setActiveTransaction={this.props.setActiveTransaction}
                  walletAddress={this.props.lender.walletAddress}
                />
              </Pages>
            </View>
          </ImageBackground>
        </View>
      )
    }
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
    marginTop: 20
  },
  line: {
    height: 10,
    borderRadius: 2,
    height: 4,
    marginBottom: 10
  },
  lineInner: {
    width: '100%',
    borderRadius: 4,
    height: 4
  },
  header: {
    fontSize: 36,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 0,
    textAlign: 'center',
    marginTop: 10
  },
  header2: {
    fontSize: 22,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#9CA9B6',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 0
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10,
    height: 40
    // borderWidth: 1,
    // borderColor: 'red'
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
    height: 40
  },
  logo: {
    // position: 'absolute',
    width: 35,
    height: 35,
    marginLeft: 10
  },
  user: {
    // position: 'absolute',
    width: 25,
    height: 25,
    marginRight: 0,
    resizeMode: 'contain'
  },
  wrapper: {},
  text: {
    fontSize: 14,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#9ca9b7',
    paddingLeft: 30,
    paddingRight: 30,
    lineHeight: 20,
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20
  },
  agreeCheckBox: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 0
  },
  agreeText: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#9ca9b7'
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 40,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: '5%',
    // marginLeft: '5%',
    paddingLeft: 20,
    paddingRight: 20,
    // marginLeft: 20,
    alignSelf: 'stretch'
  },
  buttonText: {
    color: '#333333',
    fontSize: 16
  },
  hr: {
    height: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  welcomeTitle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    color: '#ffffff',
    fontSize: 20
  },
  welcomeText: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    color: '#9CA9B6',
    fontSize: 16
  },
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 80,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 15
  },
  boxText: {
    color: '#ffffff',
    fontSize: 16,
    paddingRight: 10
  },
  boxIconWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 0
  },
  boxTextWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 0
  },
  btnsContainer: {
    flexDirection: 'row'
  },
  button2: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    height: 40,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: '5%',
    // marginLeft: '5%',
    paddingLeft: 20,
    paddingRight: 20,
    // marginRight: 20,
    alignSelf: 'stretch'
  },
  button2Text: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 16
  }
})

const stylesGraph = StyleSheet.create({
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
  header: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 40
  },
  headerText: {
    fontSize: 42,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  row: {
    height: 60,
    flexDirection: 'row'
  },
  header2Text: {
    fontSize: 24,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#9CA9B6',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0
  },
  changeUp: {
    fontSize: 18,
    color: '#47CA53'
  },
  changeDown: {
    fontSize: 18,
    color: '#ff3333'
  },
  pagesWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  pages: {
    flex: 1
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10,
    height: 40
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
    height: 40
  },
  buttonCellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    marginLeft: 10,
    height: 50
    // borderWidth: 1,
    // borderColor: 'green',
  },
  buttonCellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginRight: 10,
    height: 50
    // borderWidth: 1,
    // borderColor: 'red'
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 15
  },
  user: {
    width: 30,
    height: 30,
    marginRight: 35,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 38,
    paddingBottom: 12,
    color: '#fff'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  background: {
    flex: 1,
    paddingBottom: 20
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: '5%',
    // marginLeft: '5%',
    // paddingLeft: 20,
    // paddingRight: 20,
    // marginLeft: 30,
    alignSelf: 'stretch'
  },
  buttonText: {
    color: '#333333',
    fontSize: 20
  },
  button2: {
    // flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    height: 50,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: '5%',
    // marginLeft: '5%',
    // paddingLeft: 20,
    // paddingRight: 20,
    // marginRight: 30,
    alignSelf: 'stretch'
  },
  button2Text: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 20
  }
})

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    name: state.auth.name,
    surname: state.auth.surname,
    email: state.auth.email,
    authId: state.auth.authId,
    walletAddress: state.lender.walletAddress,
    lender: state.lender,
    ethBalance: state.wallet.ethBalance,
    celBalance: state.wallet.celBalance,
    transactions: state.transactions.transactions
  }
}

// The mapDispatchToProps function lets us inject
// certain props into the React component that can dispatch actions
const mapDispatchToProps = {
  fetchWalletBalance, fetchTransactionsHistory, lenderAppInitToken, setActiveTransaction
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
