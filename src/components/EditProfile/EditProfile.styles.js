import { StyleSheet } from 'react-native'

export const rawStyles = {
  // container
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0
  },
  // background
  background: {
    flex: 1,
    flexDirection: 'row'
  },
  // body
  body: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  // backButton
  backButton: {
    position: 'absolute',
    zIndex: 10,
    left: 20,
    top: 30,
    width: 30
  },
  // back
  back: {
    width: 28,
    height: 24,
    resizeMode: 'contain'
  },
  // logo: {
  //   width: 140,
  //   height: 40,
  //   marginLeft: 35,
  //   marginBottom: 5
  // },
  // header
  header: {
    fontSize: 38,
    backgroundColor: 'transparent',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center'
  },
  // formContainer: {
  //   marginTop: 100,
  //   marginBottom: 20
  // },
  // floatingLabel
  floatingLabel: {
    color: '#9CA9B6',
    fontSize: 12
  },
  // label: {
  //   fontSize: 12
  // },
// floatingWrapper
  floatingWrapper: {
    borderBottomWidth: 0
  },
// input
  input: {
    height: 40,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 2,
    color: '#ffffff',
    marginBottom: 10,
    marginRight: 15,
    fontSize: 21
  },
// button
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: '95%'
  },
// button2
  button2: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: '95%'
  },
// buttonText
  buttonText: {
    color: '#333333'
  },
// buttonText2
  buttonText2: {
    color: '#ffffff'
  },
// form
  form: {
    marginLeft: 20,
    marginRight: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
// cellLeft
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10,
    height: 40
  },
// cellRight
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
    height: 40
  },
// avatarSection
  avatarSection: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    position: 'relative'
  },
// avatarWrapper
  avatarWrapper: {
    width: 196,
    height: 196,
    alignItems: 'center'
  },
// avatar
  avatar: {
    marginTop: 8,
    width: 180,
    height: 180,
    borderRadius: 60
  },
// pts
  pts: {
    width: 100,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 15,
    position: 'absolute',
    zIndex: 5,
    bottom: 10,
    right: 50,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
// ptsText
  ptsText: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: '#3D4853',
    fontSize: 18,
    marginTop: 5,
    marginRight: 3
  },
// ptsTextExt
  ptsTextExt: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    fontSize: 12,
    color: '#3D4853',
    marginTop: 10
  },
// score
  score: {
    width: 16,
    height: 16,
    marginTop: 7,
    marginRight: 3,
    marginLeft: 7
  },
// errorText
  errorText: {
    marginLeft: 15,
    marginTop: 10,
    color: '#FF9494'
  },
// logoutWrapper
  logoutWrapper: {
    position: 'absolute',
    zIndex: 10,
    right: 20,
    top: 20,
    width: 30
  },
// logoutBtn
  logoutBtn: {
    width: 30,
    height: 30,
    marginTop: 5,
    opacity: 0.2
  }
}

export const styles = StyleSheet.create(rawStyles)
