import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Content, Container } from 'native-base'
import { fetchWalletBalance, fetchTransactionsHistory } from '../actions'

class Home extends Component {
  componentWillMount () {
    this.props.fetchWalletBalance(this.props.walletAddress, this.props.token)
  }

  componentWillReceiveProps (nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    console.log('received props: ')
    console.log(nextProps)
    this.props = nextProps
  }

  constructor (props) {
    super(props)
    console.log('props: ')
    console.log(props)
  }

  render () {
    const { navigate } = this.props.navigation
    const ethBalance = this.props.ethBalance
    const celBalance = this.props.celBalance
    const name = this.props.lender.name
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            <View style={[styles.row, {marginBottom: 20, marginTop: 60}]}>
              <View style={styles.cellLeft}>
                <Image source={require('../../assets/images/Celsius_Symbol_white.png')} style={styles.logo} />
              </View>
              <View style={styles.cellRight}>
                <Image source={require('../../assets/images/icon-user.png')} style={styles.user} />
              </View>
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
                  <View style={styles.cellRight}>
                    <TouchableOpacity style={styles.button2} onPress={() => navigate('ManageFounds')}>
                      <Text style={styles.button2Text}>Manage</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.hr}></View>

                <Text style={styles.welcomeTitle}>Welcome to Celsius, {name}!</Text>
                <Text style={styles.welcomeText}>As a member of Celsius community, you can lend ETH and earn DEG token for the time you spend with us.</Text>
                <View style={styles.hr}></View>
                <TouchableOpacity style={styles.box} onPress={() => navigate('HistoryDetail')}>
                  <View style={styles.boxIconWrapper}>
                    <Image source={require('../../assets/images/icon-wallet.png')} style={styles.icon} />
                  </View>
                  <View style={styles.boxTextWrapper}>
                    <Text style={styles.boxText}>Transfer funds to your newly created Celsius wallet to start earning more on top of it.</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                  <View style={styles.boxIconWrapper}>
                    <Image source={require('../../assets/images/icon-transfer.png')} style={styles.icon} />
                   </View>
                  <View style={styles.boxTextWrapper}>
                    <Text style={styles.boxText}>By lending money to borrowers, you earn Degree which you can later on sell on the market.</Text>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                  <View style={styles.boxIconWrapper}>
                    <Image source={require('../../assets/images/icon-network.png')} style={styles.icon} />
                  </View>
                  <View style={styles.boxTextWrapper}>
                    <Text style={styles.boxText}>Improve your seniority score by sticking longer with Celsius and earn more Degree.</Text>
                  </View>
                </TouchableOpacity>
              </Content>
            </Container>
        </View>
      </ImageBackground>
    </View>

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
    flexDirection: 'row',
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
    marginRight: 15,
    resizeMode: "contain"
  },
  wrapper: {

  },
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
    // width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: '5%',
    // marginLeft: '5%',
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 20,
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
    resizeMode: "contain",
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
    // width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: '5%',
    // marginLeft: '5%',
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 20,
  },
  button2Text: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 16
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
    celBalance: state.wallet.celBalance
  }
}

// The mapDispatchToProps function lets us inject
// certain props into the React component that can dispatch actions
const mapDispatchToProps = {
  fetchWalletBalance, fetchTransactionsHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)