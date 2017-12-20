import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Content, Container, ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { Form, Input, Item, Label } from 'native-base'
import { NavigationActions } from 'react-navigation'
import { Camera, Permissions } from 'expo';

class Agree extends React.Component {

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    const { navigate } = this.props.navigation
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      console.log(photo)
      try {
        await AsyncStorage.setItem('@MySuperStore:photo', JSON.stringify(photo));
      } catch (error) {
        console.log(error.message)
      }
      navigate('VerifyPhoto')
    }
  }

  render () {
    const { navigate } = this.props.navigation
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
            <View style={styles.body}>
              {/* <Image source={require('../../assets/images/logo-header.png')} style={styles.logo} /> */}
              <Text style={styles.header}>{'Take a picture'.toUpperCase()}</Text>
              <ImageBackground source={require('../../assets/images/progress-line-bg.png')} style={styles.line}>
                <ImageBackground source={require('../../assets/images/progress-line.png')} style={styles.lineInner}></ImageBackground>
              </ImageBackground>
              <ImageBackground source={require('../../assets/images/scanner.png')} style={styles.cameraWrapper}>

                <View style={{ flex: 1, height: 200, width: 290 }}>
                  <Camera style={{ flex: 1 }}
                  type={this.state.type}
                  ref={ref => { this.camera = ref; }}
                  >
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        style={{
                          flex: 0.1,
                          alignSelf: 'flex-end',
                          alignItems: 'center',
                        }}
                        onPress={() => {
                          this.setState({
                            type: this.state.type === Camera.Constants.Type.back
                              ? Camera.Constants.Type.front
                              : Camera.Constants.Type.back,
                          });
                        }}>
                        <Text
                          style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                          {' '}Flip{' '}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </Camera>
                </View>
              </ImageBackground>

              <Text style={styles.text}>Please center your face in the frame above and take a selfie. We need your recent picture to compare it with the one on the passport.</Text>

              <TouchableOpacity style={styles.button}
              // onPress={() => navigate('Register')}
              onPress={this.snap}
              >
              <Text style={styles.buttonText}>Take a photo</Text>
            </TouchableOpacity>
            </View>

          </ImageBackground>
        </View>

      )
    }
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
  cameraWrapper: {
    alignItems: 'center',
    width: 298,
    height: 208,
    padding: 4
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
  mobileWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  mobile: {
    marginTop: 20
  },
  inputWrapper: {
    height: 70,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 0,
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 70,
    textAlign: 'center',
  },
  inputDash: {
    height: 2
  },
  text: {
    fontSize: 14,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#9ca9b7',
    paddingLeft: 30,
    paddingRight: 30,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20

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

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Agree)
