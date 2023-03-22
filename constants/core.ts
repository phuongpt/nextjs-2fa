import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig() ?? {}

export const BASE_API_URL = '/api'
export const DEFAULT_CODE = process.env.DEFAULT_CODE || "123456"
export const DEFAULT_PASSWORD = process.env.DEFAULT_PASSWORD || "password1234"
