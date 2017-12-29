import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { Pages } from 'react-native-pages'
import DegIncome from './DegIncome'
import DegValue from './DegValue'
import IncomeHistory from './IncomeHistory'
import { lenderAppInitToken } from '../../actions'

class GraphPager extends Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/background.png')}
          style={styles.background}>
          <View style={styles.header}>
            <View style={styles.cellLeft}>
              <TouchableOpacity onPress={() => navigate('Welcome')}>
                <Image source={require('../../../assets/images/logo-small.png')} style={styles.logo} />
              </TouchableOpacity>
            </View>
            <View style={styles.cellRight}>
              <TouchableOpacity onPress={() => navigate('EditProfile')}>
                <Image source={require('../../../assets/images/icon-user.png')} style={styles.user} />
              </TouchableOpacity>
            </View>
          </View>
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
  pagesWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  pages: {
    flex: 1,
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10,
    height: 40,
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
    height: 40,
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  user: {
    width: 30,
    height: 30,
    marginRight: 35,
    resizeMode: "contain"
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
