import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0
  },
  background: {
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  backButton: {
    position: 'absolute',
    zIndex: 10,
    left: 20,
    top: 40,
    width: 30
  },
  back: {
    width: 28,
    height: 24,
    resizeMode: 'contain'
  },
  header: {
    fontSize: 32,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#9CA9B6',
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 15,
    fontFamily: 'barlow'
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
    marginTop: 29,
    marginBottom: 30,
    width: 150
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'barlow-medium',
    fontSize: 21
  },
  center: {
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 40
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 40
  },
  qrWrapper: {
    width: 225,
    height: 225,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingTop: 34,
    marginTop: 20,
    marginBottom: 34
  },
  codeWrapper: {
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginRight: 60,
    marginLeft: 60,
    marginTop: 0,
    marginBottom: 20
  },
  codeText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    fontFamily: 'inconsolata'
  },
  buttonLeft: {
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRightColor: '#3D4B54',
    borderRightWidth: 1,
    padding: 10,
    borderBottomLeftRadius: 8,
    justifyContent: 'center'
  },
  buttonLeftText: {
    color: '#9CA9B6',
    textAlign: 'left',
    paddingLeft: 5,
    fontFamily: 'barlow',
    fontSize: 18
  },
  buttonRight: {
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
    borderBottomRightRadius: 8,
    justifyContent: 'center'
  },
  buttonRightText: {
    color: '#9CA9B6',
    textAlign: 'left',
    paddingLeft: 5,
    fontFamily: 'barlow',
    fontSize: 18
  },
  iconLeft: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 5
  },
  iconRight: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 5
  }
})
