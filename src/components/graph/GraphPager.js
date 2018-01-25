import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StatusBar, StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground } from 'react-native'
import { Pages } from 'react-native-pages'
import DegIncome from './DegIncome'
import DegValue from './DegValue'
import IncomeHistory from './IncomeHistory'
import { lenderAppInitToken } from '../../actions'

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

class GraphPager extends Component {
  constructor () {
    super()
    this.state = {
      eth: 10.000,
      deg: 2.984,
      change: ' ▲ +3.24%',
      user: {
        name: 'Alex'
      }
    }
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <MyStatusBar barStyle='light-content' />
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.background}>
          <View style={styles.header}>
            <View style={styles.cellLeft}>
              <TouchableOpacity onPress={() => navigate('LoginForm')}>
                <Image source={require('../../assets/images/logo-small.png')} style={styles.logo} />
              </TouchableOpacity>
            </View>
            <View style={styles.cellRight}>
              <TouchableOpacity onPress={() => navigate('EditProfile')}>
                <Image source={require('../../assets/images/icon-user.png')} style={styles.user} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.headerText}>
            <Text style={[{fontFamily: 'barlow-semi-bold' }]}>{ this.state.eth.toFixed(3) } ETH</Text>
          </Text>
          <Text style={styles.header2Text}>
            <Text style={[{fontFamily: 'barlow-light' }]}>{ this.state.deg.toFixed(3) } CEL</Text>
            <Text style={[styles.changeUp, { fontFamily: 'barlow-light' }]}> { this.state.change}</Text>
          </Text>

          <View style={styles.pagesWrapper}>
            <Pages style={styles.pages}>
              <DegIncome navigation={this.props.navigation} lenderAppInitToken={this.props.lenderAppInitToken} />
              <DegValue navigation={this.props.navigation} lenderAppInitToken={this.props.lenderAppInitToken} />
              <IncomeHistory navigation={this.props.navigation} lenderAppInitToken={this.props.lenderAppInitToken} />
            </Pages>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
    height: 140,
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
  }
})

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    nav: state.nav
  }
}

const mapDispatchToProps = {
  lenderAppInitToken
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphPager)
