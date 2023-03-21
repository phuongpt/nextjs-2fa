import { BASE_API_URL } from "../constants/core"

/**
 * @param path Must start with `/`
 * @param options As per `fetch`
 */
export function fetchPath(path: string, options: RequestInit) {
  if (!path.startsWith('/')) {
    throw new Error('Path must start with "/"')
  }
  // TODO: Load base url from config
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
  // TODO: Modify `options` to include headers for ContentType(maybe?) and
  //       Authorisation (where authorised)
  const response = await fetchPath(path, options)
  // TODO: Time-out after a certain time?
  // const response = await Promise.race([
  //     fetch(`https://api.development.prosettlelab.com${path}`, options),
  //     new Promise(_, reject => setTimeout(() => reject(new Error('Request timed out')), 5 * 1000))
  // ])

  let body: any
  try {
    body = await response.json()
  } catch (e) {
    body = {}
  }

  // TODO: Do we ever get errors with a 200/OK response? Need to handle
  //       those. Would also be good to have a "standard" response format, ie
  //       `{ success: bool, error?: string }`
  //       where `error` is an error code that the FE can handle.
  //       Should also handle connectivity issues here, either recovering
  //       from them, or creating an error code to throw.
  if (!response.ok || body?.error) {
    const error = new Error(body?.error || `Unknown error calling "${path}"`)
    error['status'] = response.status
    error['payload'] = body

    throw error
  }

  return body
}
