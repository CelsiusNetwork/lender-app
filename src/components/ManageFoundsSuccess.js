import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Button, Form, Input, Item, Label, Text, Content, Header, Title, Container } from 'native-base'
import { registerFirstNameChanged, registerLastNameChanged, registerEmailChanged, registerPasswordChanged, registerPhoneNumberChanged, registerLender } from '../actions'
import { Font } from 'expo';
import { NavigationActions } from 'react-navigation'
import { withdrawETH, gotoHome } from '../actions'

class AddFounds extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount () {
    await Font.loadAsync({
      'inconsolata': require('../../assets/fonts/Inconsolata-Regular.ttf'),
    })
    await Font.loadAsync({
      'barlow-semi-bold': require('../../assets/fonts/Barlow-SemiBold.otf'),
    })
    await Font.loadAsync({
      'barlow-light': require('../../assets/fonts/Barlow-Light.otf'),
    })
    await Font.loadAsync({
      'barlow': require('../../assets/fonts/Barlow-Regular.otf'),
    })
    this.setState({ fontLoaded: true })
  }
  close () {
    console.log('hitting ')
  }
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            <Container>
              <Content>
                <Text style={styles.header}>{'SUCCESS!'.toUpperCase()}</Text>
                <View style={styles.center}>
                  <Image source={require('../../assets/images/icon-success.png')} style={styles.success} />
                </View>
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Amount of ETH</Text>) : null }
                    </View>
                    <View style={styles.cellRight}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>6.350 ETH</Text>) : null }
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Sent to wallet</Text>) : null }
                    </View>
                    <View style={styles.cellRight}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>0x901933014…</Text>) : null }
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Date</Text>) : null }
                    </View>
                    <View style={styles.cellRight}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>Dec 22, 2017</Text>) : null }
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Time</Text>) : null }
                    </View>
                    <View style={styles.cellRight}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>2:24PM</Text>) : null }
                    </View>
                  </View>

                  <Text style={styles.text}>Feel free to add funds back to Celsius wallet anytime you want.</Text>

                <View style={styles.center}>
                  <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
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

  renderError () {
    if (this.props.error !== '') { return (<Text style={styles.errorText}>{this.props.error}</Text>) }
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
    flexDirection: 'row',
    // justifyContent: 'top',
    // alignItems: 'center',
    // backgroundColor: 'red'
  },
  body: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  success: {
    width: 150,
    height: 150,
    marginBottom: 35,
    resizeMode: 'contain'
  },
  header: {
		fontSize: 34,
		backgroundColor: 'rgba(0,0,0,0)',
		color: 'white',
		paddingLeft: 30,
		paddingRight: 30,
		marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#9CA9B6',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30
  },
  formContainer: {
    marginTop: 100
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
    // marginRight: 30,
    // marginLeft: 30,
    marginTop: 30,
    width: 130,
    marginBottom: 20
  },
  buttonText: {
    color: '#ffffff'
  },
  center: {
    // flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: 50,
  },
  buttonIcon: {
    position: 'absolute',
    left: 50,
    top: 15,
    width: 20,
    height: 16,
    resizeMode: 'contain'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    borderTopWidth: 2
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  cellLeftText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 18
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 10,
    // borderColor: 'red',
    // borderWidth: 1
  },
  cellRightText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    textAlign: 'left',
    // borderColor: 'green',
    // borderWidth: 1
  },
})

const mapStateToProps = state => {
  return {
    firstName: state.register.firstName,
    lastName: state.register.lastName,
    email: state.register.email,
    password: state.register.password,
    phoneNumber: state.register.phoneNumber,

    error: state.register.error,
    nav: state.nav
  }
}

const mapDispatchToProps = {
  withdrawETH, gotoHome
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFounds)
