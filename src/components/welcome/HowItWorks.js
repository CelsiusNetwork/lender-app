import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class HowItWorks extends Component {
  navigate () {
    // this.props.lenderAppInitToken('LOHU3qeHAxFUE34Q71bfMUtdHW7afyLl', '8mJ-FJNm9BD3VW0GOfMeV278c6qUuSfFku-O8bGJPeUgXXClFf_EV5H25Rbh6Ai-', 'https://cs.celsius.network/cs', 'client_credentials')
  }
  static navigationOptions = {
    header: null
  };

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/images/logo-header.png')} style={styles.logo} />
        <View style={styles.circleWrapper}>
              <Image
                source={require('../../../assets/images/arrow-left.png')}
                resizeMode="contain"
                style={styles.aLeft} />
              <Image source={require('../../../assets/images/how-it-works.png')} style={styles.circle} />
              <Image
                source={require('../../../assets/images/arrow-right.png')}
                resizeMode="contain"
                style={styles.aRight} />
        </View>
        <Text style={styles.header}>{'How it works?'.toUpperCase()}</Text>
        <Text style={styles.text}>To join our trusted community of members, you need to create Celsius account from which you will be able to lend and borrow money.</Text>
        <TouchableOpacity style={styles.button}
          // onPress={this.navigate.bind(this)}
          onPress={() => navigate('Register')}
          >
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginTouchable} onPress={() => navigate('LoginForm')}>
          <Text style={styles.loginText}>Already have one?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1
  },
  header: {
    fontSize: 32,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    padding: 30,
    lineHeight: 20,
    textAlign: 'center'

  },
  logo: {
    position: 'absolute',
    width: 140,
    height: 40,
    left: 30,
    top: 30
  },
  circleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 180,
  },
  aLeft: {
    width: 20,
    height: 37,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  aRight: {
    width: 20,
    height: 37,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10
  },
  circle: {
    width: 140,
    height: 140
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30
  },
  buttonText: {
    color: '#333333'
  },
  loginTouchable: {
    marginTop: 25,
    marginRight: 30,
    marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    backgroundColor: 'transparent',
    color: 'white'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorks)
