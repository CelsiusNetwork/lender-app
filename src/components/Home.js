import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { Form, Input, Item, Label, Content, Container } from 'native-base'
import { NavigationActions } from 'react-navigation'
import { Font } from 'expo';

class Home extends Component {
  constructor() {
    super();
    this.state = {
        fontLoaded: false,
        checked: false,
        eth: 0.000,
        deg: 0.000,
        user: {
          name: "Alex"
        }
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'barlow-semi-bold': require('../../assets/fonts/Barlow-SemiBold.otf'),
    });
    await Font.loadAsync({
      'barlow-light': require('../../assets/fonts/Barlow-Light.otf'),
    });
    this.setState({ fontLoaded: true });
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
            <View style={[styles.row, {marginBottom: 15, marginTop: 40}]}>
              <View style={styles.cellLeft}>
                <Image source={require('../../assets/images/logo-small.png')} style={styles.logo} />
              </View>
              <View style={styles.cellRight}>
                <Image source={require('../../assets/images/icon-user.png')} style={styles.user} />
              </View>
            </View>
            <Container style={styles.wrapper}>
              <Content>
                <Text style={styles.header}>
                  { this.state.fontLoaded ? (<Text style={[{ fontFamily: 'barlow-semi-bold' }]}>{ this.state.eth.toFixed(3) }</Text>) : null }
                  { this.state.fontLoaded ? (<Text style={[{ fontFamily: 'barlow-semi-bold' }]}> ETH</Text>) : null }
                </Text>
                <Text style={styles.header2}>
                  { this.state.fontLoaded ? (<Text style={[{ fontFamily: 'barlow-light' }]}>{ this.state.deg.toFixed(3) }</Text>) : null }
                  { this.state.fontLoaded ? (<Text style={[{ fontFamily: 'barlow-light' }]}> DEG</Text>) : null }
                </Text>
                <TouchableOpacity style={styles.button}
                  onPress={() => navigate('LoginForm')}
                >
                  <Text style={styles.buttonText}>Add founds</Text>
                </TouchableOpacity>
                <View style={styles.hr}></View>
                <Text style={styles.welcomeTitle}>Welcome to Celsius, { this.state.user.name }!</Text>
                <Text style={styles.welcomeText}>As a member of Celsius community, you can lend ETH and earn DEG token for the time you spend with us.</Text>
                <View style={styles.hr}></View>

                <TouchableOpacity style={styles.box}>
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
    marginLeft: 10,
    marginRight: 10,
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
    // position: 'absolute',
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  user: {
    // position: 'absolute',
    width: 30,
    height: 30,
    marginRight: 35,
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
    // width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20%',
    marginLeft: '20%',
    marginTop: 40,
    marginBottom: 40
  },
  buttonText: {
    color: '#333333',
    fontSize: 20
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
    flexDirection: 'row',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 15,
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
    marginLeft: 0,
  },
  boxTextWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 0,
  },

})

const mapStateToProps = state => {
  return {
  }
}

// The mapDispatchToProps function lets us inject
// certain props into the React component that can dispatch actions
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// For example, the HowItWorks component calls onPress
//