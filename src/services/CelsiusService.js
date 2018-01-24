const apiUrl = 'https://cs.celsius.network/cs/api/v1'
const rewardApiUrl = 'https://cs.celsius.network/cs/rewarder'

export const CelsiusService = () => ({
  /**
   * @name registerLender
   * @description register lender to application and create wallet
   * @param firstName [string] user first name from form
   * @param lastName [string] user last name from form
   * @param email [string] user email from form
   * @param password [string] user plain password from form
   * @param phoneNumber [string] user phone number from form
   * @param appToken [string] user application token
   *
   * @return Promise<Response>
   * */
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
  },

  /**
   * @name getLenderRewardPoints
   * @description get lender reward points from /points/:wallet
   * @param walletAddress {string}
   * @param token {string}
   *
   * @return Promise<Response>
   * */
  getLenderRewardPoints (walletAddress, token) {
    const request = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      method: 'get'
    }

    return fetch(rewardApiUrl + '/points/' + walletAddress, request)
  }
})
