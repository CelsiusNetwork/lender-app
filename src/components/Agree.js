import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { Form, Input, Item, Label, Content, Container } from 'native-base'
import { NavigationActions } from 'react-navigation'
import { CheckBox } from 'react-native-elements';

class Agree extends React.Component {
  constructor() {
    super();
    this.state = {
        checked: false
    }
  }
  pressCheckbox(){
    if(this.state.checked)
      this.setState({checked: false})
    else
      this.setState({checked: true})
  }
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            <Text style={styles.header}>{'Just one more thing…'.toUpperCase()}</Text>
            <ImageBackground source={require('../../assets/images/progress-line-bg.png')} style={styles.line}>
              <ImageBackground source={require('../../assets/images/green-line.png')} style={styles.lineInner}></ImageBackground>
            </ImageBackground>
            <Container style={styles.wrapper}>
              <Content>

                <Text style={styles.text}>While we are verifying your identity, please check our Terms of Service.</Text>
                <Text style={styles.text}>As further described below, a free subscription continues until terminated, while a paid subscription has a term that may expire or be terminated. </Text>
                <Text style={styles.text}>The Contract remains effective until all subscriptions ordered under the Contract have expired or been terminated or the Contract itself terminates. Termination of the Contract will terminate all subscriptions and all Order Forms.</Text>
                <Text style={styles.text}>We or Customer may terminate the Contract on notice to the other party if the other party materially breaches the Contract and such breach is not cured within thirty (30) days after the non</Text>

              </Content>
            </Container>
            <CheckBox
              title='I agree to Terms of Service'
              containerStyle={styles.agreeCheckBox}
              textStyle={styles.agreeText}
              // checkedIcon='dot-circle-o'
              // uncheckedIcon='circle-o'
              checked={this.state.checked}
              onPress={ this.pressCheckbox.bind(this) }
            />
            {/* <Text style={styles.agreeText}>I agree to Terms of Service</Text> */}

            <TouchableOpacity style={styles.button}
            onPress={() => navigate('LoginForm')}
            >
            <Text style={styles.buttonText}>I'm done!</Text>
          </TouchableOpacity>
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
    marginLeft: 10,
    marginRight: 10,
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
  logo: {
    // flex: 1,
    // position: 'absolute',
    marginTop: 40,
    marginLeft: 30,
    width: 140,
    height: 40,
  },
  header: {
		fontSize: 30,
		backgroundColor: 'rgba(0,0,0,0)',
		color: 'white',
		paddingLeft: 30,
		paddingRight: 30,
		marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50
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
  agreeCheckBox:{
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 0
  },
  agreeText:{
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#9ca9b7',
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
    marginBottom: 20
  },
  buttonText: {
    color: '#333333'
  }
})

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Agree)
