const LOGIN_PATH = '/login'

export const createLogInPath = (returnPath?: string) => {
  if (!returnPath) {
    return LOGIN_PATH
  }

  return `${LOGIN_PATH}?return=${returnPath}`
}
