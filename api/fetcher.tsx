import localforage from 'localforage'
import axios from 'axios'
import { BASE_API_URL } from '../constants/core'
import { getTokens } from '../libs/auth/src'


const IS_URL = /\/\//

//remote
export const fetcher = (
  pathOrUrl: string,
  options: RequestInit | undefined
) => {
  const url = IS_URL.test(pathOrUrl) ? pathOrUrl : `${BASE_API_URL}${pathOrUrl}`
  return fetch(url, options).then((r) => r.json())
}

export const fetcherWithAuth = (
  pathOrUrl: string,
  options: RequestInit | undefined
) => {
  const tokens = getTokens()

  return fetcher(pathOrUrl, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${tokens.accessToken}`,
    },
  })
}

export const poster = (url: string, data: object) => {
  const tokens = getTokens()
  return axios
    .post(url, data, {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .catch(console.log)
}

//local
export const localFetcher = (key: string) => {
  return localforage.getItem(key).then((val: any) => {
    return JSON.parse(val)
  })
}
export const localSaver = (key: string, value: object) => {
  return localforage.setItem(key, JSON.stringify(value))
}

export default fetcher
