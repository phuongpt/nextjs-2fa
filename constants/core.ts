import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig() ?? {}

export const BASE_API_URL = '/api'
