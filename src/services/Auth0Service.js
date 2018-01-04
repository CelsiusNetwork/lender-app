const apiUrl = 'https://celsiusnetwork.auth0.com'

export const Auth0Service = () => ({
  siginInWithEmailAndPassword ({email, password}) {
    console.debug('service| siginInWithEmailAndPassword(email, pass) return Promise')
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        grant_type: 'password',
        client_id: 'LOHU3qeHAxFUE34Q71bfMUtdHW7afyLl',
        username: email,
        password: password
      })
    }
    console.log('request: ', request)
    return fetch(apiUrl + '/oauth/token', request)
  },
  initClientCredentials () {
    console.debug('service| initClientCredentials() return Promise')
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        client_id: 'LOHU3qeHAxFUE34Q71bfMUtdHW7afyLl',
        client_secret: '8mJ-FJNm9BD3VW0GOfMeV278c6qUuSfFku-O8bGJPeUgXXClFf_EV5H25Rbh6Ai-',
        audience: 'https://cs.celsius.network/cs',
        grant_type: 'client_credentials'
      })
    }
    return fetch(apiUrl + '/oauth/token', request)
  }

})