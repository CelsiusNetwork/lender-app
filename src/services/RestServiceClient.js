import * as _ from 'lodash'
import axios from 'axios'

export class RestService {
  constructor (baseUrl = '', {headers = {}} = {}) {
    if (_.isString(baseUrl) && !_.isEmpty(baseUrl)) {
      throw new Error('Missing baseUrl.')
    }

    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    Object.assign(this.headers, headers)

    this.baseUrl = baseUrl
  }

  /**
   * @private
   * @name fullApiUrl
   * @description concat baseUrl with resource url
   *
   * @param url [string] resource url
   *
   * return string
   */
  fullApiUrl (url) {
    if (_.isString(url) && !_.isEmpty(url)) {
      throw new Error('Missing resource url')
    }
    return `${this.baseUrl}${url}`;
  }

  /**
   * @name GET
   * @method GET
   *
   * @param url (url of endpoint)
   * @param payload
   *
   * @return AxiosPromise
   */
  POST (url, payload) {
    return axios.post(this.fullApiUrl(url), payload)
  }

  /**
   * @name GET
   * @method GET
   *
   * @param url (url of endpoint)
   *
   * @return AxiosPromise
   */
  GET (url) {
    return axios.get(this.fullApiUrl(url))
  }

  /**
   * @name PUT
   * @method PUT
   *
   * @param payload (data which will sent to server)
   * @param url
   *
   * @return AxiosPromise
   */
  PUT (url, payload) {
    return axios.put(this.fullApiUrl(url), payload)
  }

  /**
   * @name DELETE
   * @method DELETE
   *
   * @return AxiosPromise
   */
  DELETE (url) {
    return axios.delete(this.fullApiUrl(url))
  }
}
