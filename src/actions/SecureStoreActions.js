import Expo from 'expo'

const FIRST_TIME_LOGGED_IN = 'logged-once'

/**
 * @name isAlreadyLoggedIn
 * @param key {string}
 * @description replace '|' in user id with '-', for details check description of setSecureStoreKey()
 *
 * @return string
 * */
const createSecureKey = (key) => {
  return key.replace('|', '-')
}

/**
 * @name setSecureStoreKey
 * @param key {string}
 * @param value {string}
 * @description Store a key–value pair.
 * The key to associate with the stored value. Keys may contain alphanumeric characters ., -, and _.
 *
 * @return A promise that will reject if value cannot be stored on the device
 * */
const setSecureStoreKey = async (key, value) => {
  return Expo.SecureStore.setItemAsync(key, value)
}

/**
 * @name getSecureStoreKey
 * @param key {string}
 * @description Fetch the stored value associated with the provided key.
 *
 * @return A promise that resolves to the previously stored value, or null if there is no entry for the given key.
 * The promise will reject if an error occurred while retrieving the value.
 * */
const getSecureStoreKey = async (key) => {
  return Expo.SecureStore.getItemAsync(key)
}

/**
 * @name storeLoggedUser
 * @param authID {string}
 * @description On user login we store user in secure storage
 *
 * @return A promise that resolves to the previously stored value, or null if there is no entry for the given key.
 * The promise will reject if an error occurred while retrieving the value.
 * */
const storeLoggedUser = async (authID) => {
  const key = createSecureKey(authID)

  return setSecureStoreKey(key, FIRST_TIME_LOGGED_IN)
}

/**
 * @name isAlreadyLoggedIn
 * @param authID {string}
 * @description check is user already logged in
 *
 * @return key value if user already logged in or false if not
 * */
const isAlreadyLoggedIn = async (authID) => {
  if (authID) {
    const key = createSecureKey(authID)
    return getSecureStoreKey(key)
  }

  return false
}

export {setSecureStoreKey, getSecureStoreKey, storeLoggedUser, isAlreadyLoggedIn}
