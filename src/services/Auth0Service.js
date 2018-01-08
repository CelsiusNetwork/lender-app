const apiUrl = 'https://celsiusnetwork.auth0.com'

export const Auth0Service = () => ({
  siginInWithEmailAndPassword({ email, password }) {
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
    return fetch(apiUrl + '/oauth/token', request)
  },
  initClientCredentials () {
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        client_id: '5XxZ11JjiVz0U0aD62RA1blSqtvHvEBC',
        client_secret: 'QghhC-1CLpqxO_ikETk5kpBec6RkMmlsDTMvl3PMt1_XyIWuFJGqYGVP7SRkodd5',
        audience: 'https://cs.celsius.network/cs',
        grant_type: 'client_credentials'
      })
    }
    return fetch(apiUrl + '/oauth/token', request)
  },
  getUser (id, token) {
    console.log('getUser()')
    console.log(id)
    console.log(token)
    const request = {
      headers: {
        'Content-Type': 'application/json',
        // because of reasons id.t2 todo
        'Authorization': 'Bearer ' + id.t2
      },
      method: 'get'
    }
    return fetch(apiUrl + '/api/v2/users/' + id.t, request)
  }

})