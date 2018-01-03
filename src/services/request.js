import axios from 'axios'

const client = axios.create({
  baseURL: 'https://celsiusnetwork.auth0.com/oauth/token',
  clientId: 'LOHU3qeHAxFUE34Q71bfMUtdHW7afyLl'
})

export default