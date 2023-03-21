export enum StorageKey {
  SIGNUP_ID = 'signupId',
  TOKENS = 'tokens',
  TDBR_COUNT = 'tdbrCount',
}

export function getLocalStorageItem(key: StorageKey) {
  return localStorage.getItem(key)
}

export function removeLocalStorageItem(key: StorageKey) {
  return localStorage.removeItem(key)
}

export function setLocalStorageItem(key: StorageKey, value: string) {
  return localStorage.setItem(key, value)
}
