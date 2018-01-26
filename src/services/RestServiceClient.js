import * as _ from 'lodash'
import axios from 'axios'

/**
 * @name RestServiceClient
 * @description wrap all restFul methods
 * */
export class RestServiceClient {
  constructor (baseUrl = '', {headers = {}} = {}) {
    if (!_.isString(baseUrl) && !_.isEmpty(baseUrl)) {
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
   * return string full api-end point url
   */
  fullApiUrl (url) {
    if (!_.isString(url) && !_.isEmpty(url)) {
      throw new Error('Missing resource url')
    }

    return `${this.baseUrl}${url}`
  }

  /**
   * @name POST
   * @description Use POST APIs to create new subordinate resources,
   * e.g. a file is subordinate to a directory containing it or a row is subordinate to a database table.
   * @method POST
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
   * @description Use GET requests to retrieve resource representation/information only and not to modify it in any way.
   * @method GET
   *
   * @param url (url of endpoint)
   * @param params [Object] request params
   *
   * @return AxiosPromise
   */
  GET (url, params = {}) {
    return axios.get(this.fullApiUrl(url), params)
  }

  /**
   * @name PUT
   * @description Use PUT APIs primarily to update existing resource (if resource does not exist
   * then API may decide to create a new resource or not).
   * @method PUT
   *
   * @param payload [Object/json] (data which will sent to server)
   * @param url [string] resource url
   *
   * @return AxiosPromise
   */
  PUT (url, payload) {
    return axios.put(this.fullApiUrl(url), payload)
  }

  /**
   * @name DELETE
   * @description As the name applies, DELETE APIs are used to delete resources (identified by the Request-URI).
   * @method DELETE
   *
   * @param url [string] resource url
   *
   * @return AxiosPromise
   */
  DELETE (url) {
    return axios.delete(this.fullApiUrl(url))
  }
}
