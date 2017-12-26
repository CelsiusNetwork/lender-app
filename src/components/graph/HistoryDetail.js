import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Content, Container, Form, Input, Item, Label } from 'native-base'
import { NavigationActions } from 'react-navigation'
import { Font } from 'expo';

class HistoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fontLoaded: false,
    }
  }
  navigate () {

  }
  async componentDidMount() {
    await Font.loadAsync({
      'barlow-semi-bold': require('../../../assets/fonts/Barlow-SemiBold.otf'),
    });
    await Font.loadAsync({
      'barlow': require('../../../assets/fonts/Barlow-Regular.otf'),
    });
    this.setState({ fontLoaded: true });
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            {/* <Image source={require('../../../assets/images/logo-header.png')} style={styles.logo} /> */}
            <Text style={styles.header}>{'Received Ethereum'.toUpperCase()}</Text>
            <Container>
              <Content>
                <View style={styles.aCenter}>
                  <View style={styles.ethWrapper}>
                    <View style={[styles.arrowUp, styles.green]}>
                      <Image source={require('../../../assets/images/icon-received.png')} style={styles.icon} />
                    </View>
                    <Image source={require('../../../assets/images/icon-eth.png')} style={styles.eth} />
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Amount of ETH</Text>) : null }
                    </View>
                    <View style={styles.cellRight}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>7.000 ETH</Text>) : null }
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Value at the time</Text>) : null }
                    </View>
                    <View style={styles.cellRight}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>$ 2,558.92</Text>) : null }
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Points earned</Text>) : null }
                    </View>
                    <View style={styles.cellRight}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>2559</Text>) : null }
                    <Image source={require('../../../assets/images/icon-points.png')} style={styles.points} />
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Date</Text>) : null }
                    </View>
                    <View style={styles.cellRight}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>Nov 8, 2017</Text>) : null }
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Time</Text>) : null }
                    </View>
                    <View style={styles.cellRight}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>9:21AM</Text>) : null }
                    </View>
                  </View>
                  <View style={[styles.row, {borderBottomColor: 'rgba(255, 255, 255, 0.1)', borderBottomWidth: 2}]}>
                    <View style={styles.cellLeft}>
                    { this.state.fontLoaded ? (<Text style={[styles.cellLeftText, { fontFamily: 'barlow' }]}>Status</Text>) : null }
                    </View>
                    <View style={styles.cellRight}>
                      <View style={styles.greenDow}></View>
                    { this.state.fontLoaded ? (<Text style={[styles.cellRightText, { fontFamily: 'barlow-semi-bold' }]}>Complete</Text>) : null }
                    </View>
                  </View>

                  <TouchableOpacity style={styles.button}
                      onPress={() => navigate('Graph')}
                    >
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
  aCenter: {
    flex: 1,
    alignItems: 'center'
  },
  line: {
    height: 10,
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
    height: 40,
  },
  header: {
		fontSize: 32,
		backgroundColor: 'rgba(0,0,0,0)',
		color: 'white',
		paddingLeft: 30,
		paddingRight: 30,
		marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50
  },
  ethWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    position: 'relative'
  },
  eth: {
    marginTop: 35,
    width: 80,
    height: 80,
    resizeMode: "contain"
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
    marginTop: 20
  },
  buttonText: {
    color: '#ffffff'
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
    resizeMode: "contain"
  },
  points: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginTop: 1,
    marginLeft: 5
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
    fontSize: 21
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
    fontSize: 21,
    textAlign: 'left',
    // borderColor: 'green',
    // borderWidth: 1
  },
  greenDow: {
    width: 10,
    height: 10,
    backgroundColor: '#47CA53',
    borderRadius: 5,
    marginTop: 10,
    marginRight: 5
  }
})

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetail)
