export const loadState = (name) => {
  try {
    const serializedState = localStorage.getItem(name)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (name, data) => {
  try {
    const serializedState = JSON.stringify(data)
    localStorage.setItem(name, serializedState)
  } catch (err) {
    console.log(err)
  }
}