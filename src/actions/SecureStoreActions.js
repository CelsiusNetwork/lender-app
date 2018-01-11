import Expo from 'expo'

const FIRST_TIME_LOGGED_IN = 'logged-once'

function createSecureKey (key) {
  // in case that we have to store user authID we should replace | with -
  return key.replace('|', '-')
}

const setSecureStoreKey = async (key, value) => {
  return Expo.SecureStore.setItemAsync(key, value)
}

const getSecureStoreKey = async (key) => {
  return Expo.SecureStore.getItemAsync(key)
}

const storeLoggedUser = async (authID) => {
  const key = createSecureKey(authID)

  return setSecureStoreKey(key, FIRST_TIME_LOGGED_IN)
}

const isAlreadyLoggedIn = async (authID) => {
  if (authID) {
    const key = createSecureKey(authID)
    return getSecureStoreKey(key)
  }

  return false
}

export { setSecureStoreKey, getSecureStoreKey, storeLoggedUser, isAlreadyLoggedIn }
