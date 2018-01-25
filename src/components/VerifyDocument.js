import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { Form, Input, Item, Label, Content, Container } from 'native-base'
// import { NavigationActions } from 'react-navigation'
import { Camera, Permissions } from 'expo';

class VerifyDocument extends React.Component {

  state = {
    showDocCamera: false,
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    backgroundColorLeft: {backgroundColor: 'rgba(255,255, 255, 0.2)', borderColor: 'rgba(255,255, 255, 0)'},
    backgroundColorRight: {backgroundColor: 'rgba(255,255, 255, 0)', borderColor: 'rgba(255,255, 255, 0.2)'}
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    // const { navigate } = this.props.navigation
    if (this.camera) {
      let documentPhoto = await this.camera.takePictureAsync();
      console.log(documentPhoto)
      try {
        await AsyncStorage.setItem('@MySuperStore:documentPhoto', JSON.stringify(documentPhoto));
      } catch (error) {
        console.log(error.message)
      }
      // navigate('VerifyPhoto')
    }
  }

  pressLeft(){
    this.setState({backgroundColorLeft: {backgroundColor: 'rgba(255,255, 255, 0.2)', borderColor: 'rgba(255,255, 255, 0)'}})
    this.setState({backgroundColorRight: {backgroundColor: 'rgba(255,255, 255, 0)', borderColor: 'rgba(255,255, 255, 0.2)'}})
  }

  pressRight(){
    this.setState({backgroundColorLeft: {backgroundColor: 'rgba(255,255, 255, 0)', borderColor: 'rgba(255,255, 255, 0.2)'}})
    this.setState({backgroundColorRight: {backgroundColor: 'rgba(255,255, 255, 0.2)', borderColor: 'rgba(255,255, 255, 0)'}})
  }

  render () {
    var camera = this.state.showDocCamera ? <Camera style={{ flex: 1 }}
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
          <Image source={require('../assets/images/camera-flip.png')} style={styles.flip} />
        </TouchableOpacity>
      </View>
    </Camera> : null;
    // const { navigate } = this.props.navigation
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <Container>
          <Content>
            <View style={[styles.row, {marginTop: 30, marginBottom: 30, marginLeft: 10, marginRight: 10}]}>
              <TouchableOpacity
                style={[styles.checkLeft, this.state.backgroundColorLeft]}
                onPress={this.pressLeft.bind(this)}
                ><Text style={styles.checkText}>Passport</Text></TouchableOpacity>
              <TouchableOpacity
                style={[styles.checkRight, this.state.backgroundColorRight]}
                onPress={this.pressRight.bind(this)}
                ><Text style={styles.checkText}>ID Card</Text></TouchableOpacity>
            </View>
            <View style={styles.aCenter}>
              <ImageBackground source={require('../assets/images/scanner.png')} style={styles.cameraWrapper}>
                <View style={{ flex: 1, height: 200, width: 290 }}>
                  {camera}
                </View>
              </ImageBackground>
            </View>
            <Text style={styles.text}>Please center your passport in the area above. Ensure that there’s enough light in the room for better picture quality.</Text>
            <View>
              {/*<TouchableOpacity style={styles.button}
              // onPress={() => navigate('Register')}
              onPress={this.snap}
              >
                <Text style={styles.buttonText}>Take a photo</Text>
              </TouchableOpacity>*/}
            </View>
          </Content>
        </Container>

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginTop: 10,
    marginBottom: 10
  },
  checkLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10,
    // width: '50%',
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    height: 40,
    // backgroundColor: 'rgba(255,255, 255, 0.2)',
    // borderColor: 'rgba(255,255, 255, 0)'
  },
  checkRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
    // width: '50%',
    borderWidth: 2,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    height: 40,
    // backgroundColor: 'rgba(255,255, 255, 0)',
    // borderColor: 'rgba(255,255, 255, 0.2)'
  },
  checkText: {
    width: '100%',
    textAlign: 'center',
    color: '#ffffff',
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
  aCenter: {
    alignItems: 'center'
  },
  lineInner: {
    width: '66%',
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
    marginTop: 50,
    fontFamily: 'barlow'
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
    fontSize: 18,
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
    marginLeft: 30,
    marginBottom: 20
  },
  buttonText: {
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#333333'
  },
  flip: {
    width: 50,
    height: 32,
    resizeMode: 'contain',
    marginLeft: 35,
    marginBottom: 5
  }
})

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyDocument)
