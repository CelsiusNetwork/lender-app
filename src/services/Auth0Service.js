import axios from 'axios'

export const siginInWithEmailAndPassword = (email, password) => {
  const request = {
    method: 'post',
    url: 'https://celsiusnetwork.auth0.com/oauth/token',
    data: {
      grant_type: 'password',
      client_id: 'LOHU3qeHAxFUE34Q71bfMUtdHW7afyLl',
      username: email,
      password: password
    }
  }

  return axios(JSON.stringify(request))
}