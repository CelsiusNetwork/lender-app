import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity, AsyncStorage, Animated } from 'react-native'
import { Form, Input, Item, Label, Content, Container } from 'native-base'
import { NavigationActions } from 'react-navigation'
import { Font } from 'expo';

class DegValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fontLoaded: false,
        eth: 10.000,
        deg: 2.984,
        change: ' ▼ +1.24%',
        user: {
          name: "Alex"
        },
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'barlow-semi-bold': require('../../../assets/fonts/Barlow-SemiBold.otf'),
    });
    await Font.loadAsync({
      'barlow-light': require('../../../assets/fonts/Barlow-Light.otf'),
    });
    await Font.loadAsync({
      'barlow': require('../../../assets/fonts/Barlow-Regular.otf'),
    });
    this.setState({ fontLoaded: true });
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.welcomeContainer}>
        <Container style={styles.wrapper}>
          <Content>
            <View style={{borderBottomColor: '#305072', borderBottomWidth: 1, marginLeft: 12, marginRight: 12}} />
            <View style={styles.graphWrapper}>
              <Image source={require('../../../assets/images/graph-token-value.png')} style={styles.graph} />
            </View>
            <Text style={styles.footer}>
              { this.state.fontLoaded ? (<Text style={[{ fontFamily: 'barlow' }]}>CEL Value</Text>) : null }
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
    flexDirection: 'row',
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
    marginLeft: 10,
    // height: 40,
    // borderWidth: 1,
    // borderColor: 'green',
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
    // height: 40,
    // borderWidth: 1,
    // borderColor: 'red'
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    // width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: '5%',
    // marginLeft: '5%',
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 30,
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
    // width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: '5%',
    // marginLeft: '5%',
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 30,
  },
  button2Text: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 20
  },
  graphWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    // borderWidth: 1,
    // borderColor: 'blue'

  },
  graph: {
    flex: 1,
    // flexDirection: 'row',
    width: 300,
    height: 340,
    resizeMode: "contain",
    marginLeft: 20,
    marginRight: 20,
    // borderWidth: 1,
    // borderColor: 'red'
  },
  footer: {
		fontSize: 24,
		backgroundColor: 'rgba(0,0,0,0)',
		color: '#ffffff',
		paddingLeft: 30,
		paddingRight: 30,
		marginBottom: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0
  },
})

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(DegValue)
