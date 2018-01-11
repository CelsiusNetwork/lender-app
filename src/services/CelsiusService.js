const apiUrl = 'https://cs.celsius.network/cs/api/v1'

export const CelsiusService = () => ({
  registerLender (firstName, lastName, email, password, phoneNumber, appToken) {
    console.log(firstName, lastName)
    const request = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + appToken
      },
      method: 'post',
      body: JSON.stringify({
        email: email,
        password: password,
        user_metadata: {
          name: firstName,
          surname: lastName
        },
        wallet: {
          password: password
        }
      })
    }
    return fetch(apiUrl + '/lender/register', request)
  }
})
