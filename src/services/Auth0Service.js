const apiUrl = 'https://celsiusnetwork.auth0.com'

export const Auth0Service = () => ({
  /**
   * @name signInWithEmailAndPassword
   * @description get access token with user credentials
   *
   * @param email [string] user email
   * @param password [string] plain user password
   *
   * @return Promise server response
   * */
  signInWithEmailAndPassword ({ email, password }) {
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

  /**
   * @name initCredentials
   * @description
   *
   * @return Promise server response
   * */
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

  /**
   * @name getUser
   * @description Get specific user by userId
   *
   * @param id [String] user id
   * @param token [String] oAuth access token
   *
   * @return Promise server response
   * */
  getUser (id, token) {
    const request = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + id
      },
      method: 'get'
    }

    return fetch(apiUrl + '/api/v2/users/' + token, request)
  }

})
