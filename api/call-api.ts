import { BASE_API_URL } from "../constants/core"

/**
 * @param path Must start with `/`
 * @param options As per `fetch`
 */
export function fetchPath(path: string, options: RequestInit) {
  if (!path.startsWith('/')) {
    throw new Error('Path must start with "/"')
  }
  return fetch(`${BASE_API_URL}${path}`, options)
}

/**
 * @param path Must start with `/`
 * @param options As per `fetch`
 */
export async function callApi<T>(
  path: string,
  options: RequestInit
): Promise<T> {

  const response = await fetchPath(path, options)

  let body: any
  try {
    body = await response.json()
  } catch (e) {
    body = {}
  }

  if (!response.ok || body?.error) {
    const error = new Error(body?.error || `Unknown error calling "${path}"`)
    error['status'] = response.status
    error['payload'] = body

    throw error
  }

  return body
}
