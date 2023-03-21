import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import { logOut } from '../api/auth/methods'

const Logout = () => {
  const router = useRouter()
  const { cache } = useSWRConfig()
  cache.clear()

  useEffect(() => {
    logOut()
    router.push('/')
  }, [])

  return null
}

export default Logout
