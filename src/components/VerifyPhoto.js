import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { Form, Input, Item, Label, Content, Container } from 'native-base'
// import { NavigationActions } from 'react-navigation'
import { Camera, Permissions } from 'expo';

class VerifyPhoto extends React.Component {

  state = {
    showPhotoCamera: false,
    hasPhotoCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPhotoCameraPermission: status === 'granted' });
  }

  snap = async () => {
    // const { navigate } = this.props.navigation
    if (this.photoCamera) {
      let photo = await this.photoCamera.takePictureAsync();
      console.log(photo)
      try {
        await AsyncStorage.setItem('@MySuperStore:photo', JSON.stringify(photo));
      } catch (error) {
        console.log(error.message)
      }
      // navigate('Agree')
    }
  }

  render () {
    var camera = this.props.showPhotoCamera ? <Camera style={{ flex: 1 }}
    type={this.state.type}
    ref={ref => { this.photoCamera = ref; }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          flexDirection: 'row',
        }}>
      </View>
    </Camera> : null;
    var cameraFlip = this.state.showPhotoCamera ? <Camera style={{ flex: 1 }}
    type={this.state.type}
    ref={ref => { this.photoCamera = ref; }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          flexDirection: 'row',
        }}>
      </View>
    </Camera> : null;

    var cameraFlip = this.state.showPhotoCameraFlip ? <TouchableOpacity
    style={[styles.cameraFlip, {flex: 0.1, alignSelf: 'flex-end', alignItems: 'center',}]}
      onPress={() => {
        this.setState({
          type: this.state.type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back,
        });
      }}>
      <Image source={require('../../assets/images/camera-flip.png')} style={styles.flip} />
    </TouchableOpacity> : null;
    // const { navigate } = this.props.navigation
    const { hasPhotoCameraPermission } = this.state;
    if (hasPhotoCameraPermission === null) {
      return <View />;
    } else if (hasPhotoCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <Container>
          <Content>
            <View style={[styles.aCenter, {position: 'relative'}]}>
              {cameraFlip}
              <View style={styles.cameraWrapper}>
                <View style={{ flex: 1, height: 330, width: 280 }}>
                  {camera}
                </View>
              </View>
              <Text style={styles.text}>Please center your face in the frame above and take a selfie. We need your recent picture to compare it with the one on the passport.</Text>
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
  cameraFlip: {
    position: 'absolute',
    left: 10,
    top: 300
  },
  cameraWrapper: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: 260,
    height: 260,
    // padding: 4,
    borderRadius: 140,
    overflow: 'hidden',
    transform: [
      {scaleY: 1.13}
    ],
    // borderColor: 'red',
    // borderWidth: 1,
    marginTop: 20,
    marginBottom: 20
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
  aCenter: {
    alignItems: 'center'
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
    marginLeft: 30,
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#333333',
    alignSelf: 'stretch',
    textAlign: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPhoto)
