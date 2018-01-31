import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import {Content, Container} from 'native-base'

class IncomeHistory extends Component {
  constructor () {
    super()
    this.state = {}

    this.refreshTransactionsInterval = null
  }

  // Event Handlers
  handleTransactionPress (transaction) {
    const {navigation, setActiveTransaction} = this.props
    setActiveTransaction(transaction)
    navigation.navigate('HistoryDetail')
  }

  // Component Lifecycle Methods
  componentDidMount () {
    const {fetchTransactionsHistory, walletAddress} = this.props

    // refreshing transactions every 60s
    fetchTransactionsHistory(walletAddress)
    this.refreshTransactionsInterval = setInterval(() => {
      fetchTransactionsHistory(walletAddress)
    }, 60000)
  }

  componentWillUnmount () {
    clearInterval(this.refreshTransactionsInterval)
  }

  // Rendering Methods
  renderTransaction (t) {
    const {walletAddress} = this.props

    if (!t.isDegreeTransaction) {
      if (t.timeDisplay.startsWith(0)) {
        t.timeDisplay = t.timeDisplay.slice(1) // slice 0 form time display ex. 04:22 AM to 4:22 AM
      }

      return (
        <TouchableOpacity key={t.hash} style={styles.tableRow} onPress={() => this.handleTransactionPress(t)}>
          <View>
            <Image source={require('../../assets/images/icon-etherium.png')} style={styles.icon} />
          </View>
          <View style={styles.value}>
            <Text style={[styles.valueText, {fontFamily: 'barlow-semi-bold'}]}>{t.ethValue} ETH</Text>
          </View>
          {t.isReceiving(walletAddress) ? (
            <View style={[styles.status, styles.greenStatus]}>
              <Text style={[styles.statusText, styles.greenText, {fontFamily: 'barlow'}]}>RECEIVED</Text>
            </View>
          ) : (
            <View style={[styles.status, styles.orangeStatus]}>
              <Text style={[styles.statusText, styles.orangeText, {fontFamily: 'barlow'}]}>SOLD</Text>
            </View>
          )}
          <View style={styles.created}>
            <Text style={[styles.createdText, {fontFamily: 'barlow'}]}>{t.dateDisplay}</Text>
            <Image source={require('../../assets/images/icon-time.png')} style={styles.clock} />
            <Text style={[styles.createdText, {fontFamily: 'barlow'}]}>{t.timeDisplay}</Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity key={t.hash} style={[styles.tableRow]} onPress={() => this.handleTransactionPress(t)}>
          <View>
            <Image source={require('../../assets/images/icon-coins.png')} style={styles.icon} />
          </View>
          <View style={styles.value}>
            <Text style={[styles.valueText, {fontFamily: 'barlow-semi-bold'}]}>{t.degAmount} CEL</Text>
          </View>
          {t.isReceiving(walletAddress) ? (
            <View style={[styles.status, styles.greenStatus]}>
              <Text style={[styles.statusText, styles.greenText, {fontFamily: 'barlow'}]}>RECEIVED</Text>
            </View>
          ) : (
            <View style={[styles.status, styles.orangeStatus]}>
              <Text style={[styles.statusText, styles.orangeText, {fontFamily: 'barlow'}]}>SOLD</Text>
            </View>
          )}
          <View style={styles.created}>
            <Text style={[styles.createdText, {fontFamily: 'barlow'}]}>{t.dateDisplay}</Text>
            <Image source={require('../../assets/images/icon-time.png')} style={styles.clock} />
            <Text style={[styles.createdText, {fontFamily: 'barlow'}]}>{t.timeDisplay}</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }

  render () {
    const {transactions} = this.props
    return (
      <View style={styles.welcomeContainer}>
        <Container style={styles.wrapper}>
          <Content>
            <View style={{borderBottomColor: '#305072', borderBottomWidth: 1, marginLeft: 12, marginRight: 12}} />
            <View style={styles.tableWrapper}>
              {transactions.map((t) => this.renderTransaction(t))}
            </View>
            <Text style={[styles.footer, {marginBottom: 50}]}>
              <Text style={[{fontFamily: 'barlow'}]}>Activity</Text>
            </Text>
            <View style={{borderBottomColor: 'rgba(255,255,255,0.1)', borderBottomWidth: 1, marginLeft: 12, marginRight: 12}} />
          </Content>
        </Container>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1
  },
  tableWrapper: {
    marginLeft: 20,
    marginRight: 20
  },
  header: {
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
    height: 140,
    flexDirection: 'row'
  },
  header2: {
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
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 30
  },
  buttonText: {
    color: '#333333',
    fontSize: 20
  },
  button2: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 30
  },
  button2Text: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 20
  },
  graphWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30
  },
  tableContainer: {
    flex: 1,
    height: 340,
    marginLeft: 20,
    marginRight: 20
  },
  footer: {
    fontSize: 24,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ffffff',
    paddingLeft: 10,
    paddingRight: 30,
    marginBottom: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0
  },
  tableRow: {
    height: 82,
    borderBottomWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    position: 'relative'
  },
  value: {
    position: 'absolute',
    top: 10,
    left: 50
  },
  valueText: {
    color: '#ffffff',
    fontSize: 21
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 0,
    marginTop: 20
  },
  status: {
    position: 'absolute',
    top: 45,
    left: 40,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    paddingTop: 0,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10
  },
  statusText: {
    color: '#ffffff',
    fontSize: 14
  },
  created: {
    position: 'absolute',
    right: 0,
    bottom: 15,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '55%'
  },
  clock: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 8,
    marginTop: 3
  },
  createdText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 16,
    flexDirection: 'column'
  },
  greenStatus: {
    borderColor: '#47CA53',
    marginLeft: 10
  },
  greenText: {
    color: '#47CA53'
  },
  orangeStatus: {
    borderColor: '#E19F30',
    marginLeft: 10
  },
  orangeText: {
    borderColor: '#E19F30'
  }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeHistory)
