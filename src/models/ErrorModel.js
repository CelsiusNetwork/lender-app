export class ErrorModel {
  constructor (statusCode, message, details, errorName) {
    this._statusCode = statusCode
    this._message = message
    this._details = details
    this._errorName = errorName
  }

  get statusCode () {
    return this._statusCode
  }

  set statusCode (value) {
    this._statusCode = value
  }

  get message () {
    return this._message
  }

  set message (value) {
    this._message = value
  }

  get details () {
    return this._details
  }

  set details (value) {
    this._details = value
  }

  get errorName () {
    return this._errorName
  }

  set errorName (value) {
    this._errorName = value
  }
}
