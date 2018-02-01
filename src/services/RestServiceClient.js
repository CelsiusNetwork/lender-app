import * as _ from 'lodash'
import axios from 'axios'
import {ErrorModel} from '../models/ErrorModel'

/**
 * @name RestServiceClient
 * @description wrap all restFul methods
 * */
export class RestServiceClient {
  constructor (baseUrl = '', {headers = {}, authorizationToken = null} = {}) {
    if (!_.isString(baseUrl) && !_.isEmpty(baseUrl)) {
      throw new Error('Missing baseUrl.')
    }

    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    if (_.isString(authorizationToken) && !_.isEmpty(authorizationToken)) {
      this.headers = {...this.headers, Authorization: `Bearer ${authorizationToken}`}
    }

    Object.assign(this.headers, headers)

    this.baseUrl = baseUrl
  }

  /**
   * @name processResponse
   * @description handle server response
   *
   * @param response [object]
   *
   * return Object
   */
  static processResponse (response) {
    if ('content-type' in response.headers) {
      let contentType = response.headers['content-type']
      if (contentType.startsWith('application/json') > -1) {
        return response.data
      } else if (contentType.startsWith('text/plain') > -1) {
        return response // TODO (djs): ....
      }
    }
  }

  /**
   * @name processErrorResponse
   * @description handle server response
   *
   * @param error [object]
   *
   * return ErrorModel
   */
  static processErrorResponse (error) {
    const { stack } = error

    let errorModel = new ErrorModel()
    errorModel.details = stack

    if (error.response) {
      const { status, data } = error.response

      errorModel.statusCode = status
      try {
        errorModel.message = data.error.msg.message
        errorModel.errorName = data.error.msg.name
      } catch (e) {
        errorModel.message = `Something went wrong.`
        errorModel.errorName = `Name isn't defined`
      }
    } else {
      errorModel.errorName = error.name
      errorModel.message = error.message
    }

    console.group()
    console.warn(`${errorModel.errorName} details: ${errorModel.message}`)
    console.warn(errorModel)
    console.groupEnd()

    return errorModel
  }

  /**
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
   * @param payload [Object] (data which will sent to server)
   * @param params [Object] request params
   *
   * @return Promise<AxiosResponse>
   */
  POST (url, payload, params = {}) {
    return axios.post(this.fullApiUrl(url), payload, {params, headers: this.headers})
      .then(response => RestServiceClient.processResponse(response))
      .catch(error => RestServiceClient.processErrorResponse(error))
  }

  /**
   * @name GET
   * @description Use GET requests to retrieve resource representation/information only and not to modify it in any way.
   * @method GET
   *
   * @param url (url of endpoint)
   * @param params [Object] request params
   *
   * @return Promise<AxiosResponse>
   */
  GET (url, params = {}) {
    return axios.get(this.fullApiUrl(url), {params, headers: this.headers})
      .then(response => RestServiceClient.processResponse(response))
      .catch(error => RestServiceClient.processErrorResponse(error))
  }

  /**
   * @name PUT
   * @description Use PUT APIs primarily to update existing resource (if resource does not exist
   * then API may decide to create a new resource or not).
   * @method PUT
   *
   * @param url [string] resource url
   * @param payload [Object] (data which will sent to server)
   * @param params [Object] headers and etc.
   *
   * @return Promise<AxiosResponse>
   */
  PUT (url, payload, params = {}) {
    return axios.put(this.fullApiUrl(url), payload, {params, headers: this.headers})
      .then(response => RestServiceClient.processResponse(response))
      .catch(error => RestServiceClient.processErrorResponse(error))
  }

  /**
   * @name DELETE
   * @description As the name applies, DELETE APIs are used to delete resources (identified by the Request-URI).
   * @method DELETE
   *
   * @param url [string] resource url
   *
   * @return Promise<AxiosResponse>
   */
  DELETE (url) {
    return axios.delete(this.fullApiUrl(url))
      .then(response => RestServiceClient.processResponse(response))
      .catch(error => RestServiceClient.processErrorResponse(error))
  }
}
