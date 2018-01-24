import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Content, Container, Form, Input, Item, Label } from 'native-base'
import { NavigationActions } from 'react-navigation'
import { Font } from 'expo'

class HistoryDetail extends Component {
  constructor (props) {
    super(props)
  }
  navigate () {

  }

  renderHeadingText () {
    const { activeTransaction, walletAddress } = this.props
    let heading = ''

    if (activeTransaction.isReceiving(walletAddress)) {
      heading = 'RECEIVED'
    } else {
      heading = 'SOLD'
    }

    if (activeTransaction.isDegreeTransaction) {
      heading = `${heading} DEGREE`
    } else {
      heading = `${heading} ETHEREUM`
    }

    return heading
  }

  render () {
    const { navigate } = this.props.navigation
    const { activeTransaction, walletAddress } = this.props

    console.log(this.props)
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            {/* <Image source={require('../../../assets/images/logo-header.png')} style={styles.logo} /> */}
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={[styles.backButton]}>
              <Image source={require('../../../assets/images/icon-back.png')} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.header}>{ this.renderHeadingText() }</Text>
            <Container>
              <Content>
                <View style={styles.aCenter}>
                  <View style={styles.ethWrapper}>
                    { activeTransaction.isReceiving(walletAddress) ? (
                      <View style={[styles.arrowUp, styles.green]}>
                        <Image source={require('../../../assets/images/icon-received.png')} style={styles.icon} />
                      </View>
                    ) : (
                      <View style={[styles.arrowUp, styles.red]}>
                        <Image source={require('../../../assets/images/icon-given.png')} style={styles.icon} />
                      </View>
                    )}
                    { activeTransaction.isDegreeTransaction ? (
                      <Image source={require('../../../assets/images/icon-coins.png')} style={styles.eth} />
                    ) : (
                      <Image source={require('../../../assets/images/icon-eth.png')} style={styles.eth} />
                    )}
                  </View>
                  { activeTransaction.isDegreeTransaction ? (
                    <View style={styles.row}>
                      <View style={styles.cellLeft}>
                        <Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Amount of CEL</Text>
                      </View>
                      <View style={styles.cellRight}>
                        <Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>{ activeTransaction.degAmount } CEL</Text>
                      </View>
                    </View>
                  ) : (
                    <View style={styles.row}>
                      <View style={styles.cellLeft}>
                        <Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Amount of ETH</Text>
                      </View>
                      <View style={styles.cellRight}>
                        <Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>{ activeTransaction.ethValue } ETH</Text>
                      </View>
                    </View>
                  )}

                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                      <Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Points earned</Text>
                    </View>
                    <View style={styles.cellRight}>
                      <Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>100</Text>
                      <Image source={require('../../../assets/images/icon-points.png')} style={styles.points} />
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                      <Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Date</Text>
                    </View>
                    <View style={styles.cellRight}>
                      <Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>{ activeTransaction.dateDisplay }</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                      <Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Time</Text>
                    </View>
                    <View style={styles.cellRight}>
                      <Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>{ activeTransaction.timeDisplay }</Text>
                    </View>
                  </View>
                  <View style={[styles.row, {borderBottomColor: 'rgba(255, 255, 255, 0.1)', borderBottomWidth: 2}]}>
                    <View style={styles.cellLeft}>
                      <Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Status</Text>
                    </View>
                    <View style={styles.cellRight}>
                      <View style={styles.greenDow} />
                      <Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>Complete</Text>
                    </View>
                  </View>

                  <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity>
                </View>
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
    flex: 1,
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
    fontSize: 32,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50
  },
  ethWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 38,
    position: 'relative'
  },
  eth: {
    marginTop: 35,
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 14,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#9ca9b7',
    paddingLeft: 30,
    paddingRight: 30,
    lineHeight: 20,
    textAlign: 'center'

  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30,
    borderWidth: 2,
    borderColor: '#ffffff',
    width: 150,
    marginTop: 40
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 21,
    fontFamily: 'barlow-medium',
  },
  green: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#47CA53',
    borderColor: '#27517B',
    borderWidth: 2,
    alignItems: 'center'
  },
  red: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ff3333',
    borderColor: '#27517B',
    borderWidth: 2,
    alignItems: 'center'
  },
  icon: {
    marginTop: 10,
    width: 22,
    height: 22,
    resizeMode: 'contain'
  },
  points: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginTop: 1,
    marginLeft: 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    borderTopWidth: 2,
    marginRight: 8,
    marginLeft: 8
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  cellLeftText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 21
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 10,
    paddingLeft: 20
    // borderColor: 'red',
    // borderWidth: 1
  },
  cellRightText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 21,
    textAlign: 'left'
    // borderColor: 'green',
    // borderWidth: 1
  },
  greenDow: {
    width: 10,
    height: 10,
    backgroundColor: '#47CA53',
    borderRadius: 5,
    marginTop: 7,
    marginRight: 5
  }
})

const mapStateToProps = state => {
  const { activeTransaction } = state.transactions
  const { walletAddress } = state.lender

  return {
    activeTransaction,
    walletAddress
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetail)
