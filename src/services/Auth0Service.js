import axios from 'axios'

const baseUrl = 'https://celsiusnetwork.auth0.com'
const clientId = 'LOHU3qeHAxFUE34Q71bfMUtdHW7afyLl'
const clientSecret = ''
const audience = ''
const grantType = ''

export const getAppToken = () => {
  const request = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      audience: audience,
      grant_type: grantType
    })
  }
  fetch('https://celsiusnetwork.auth0.com/oauth/token', request)
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })
}
