import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

class HowItWorks extends Component {
  navigate () {
    const navigate2Register = NavigationActions.navigate({
      routeName: 'Register',
      params: {
        name: 'Register'
      }
    })
    this.props.navigation.dispatch(navigate2Register)
  }

  render () {
    return (
      <View style={styles.container}>
        <View>
          <Image source={require('../../../assets/images/logo-header.png')} style={styles.logo} />
          {/* <View style={styles.circleWrapper}>
                <Image source={require('../../../assets/images/arrow-left.png')} style={styles.aLeft} />
                <Image source={require('.../../../assets/images/how-it-works.png')} style={styles.circle} />
                <Image source={require('../../../assets/images/arrow-right.png')} style={styles.aRight} />
              </View> */}
          <Text style={styles.header}>{'How it works?'.toUpperCase()}</Text>
          <Text style={styles.text}>To join our trusted community of members, you need to create Celsius account from which you will be able to lend and borrow money.</Text>
          <TouchableOpacity style={styles.button} onPress={this.navigate.bind(this)}>
            <Text style={styles.buttonText} onPress={this.navigate.bind(this)}>Create account</Text>
          </TouchableOpacity>
        </View>
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
    height: 180
  },
  aLeft: {
    width: 20,
    height: 37,
    marginRight: 30,
    marginLeft: 70
  },
  aRight: {
    width: 20,
    height: 37,
    marginLeft: 30
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorks)
