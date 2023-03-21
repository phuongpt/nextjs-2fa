import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuthentication } from '../services/auth-service'


export const Index = () => {
  const router = useRouter()
  const { authenticating, authenticated } = useAuthentication({
    requireElevated: false,
  })

  useEffect(() => {
    if (authenticating) {
      return
    }

    if (authenticated) {
      // router.push(createChannelPath())// for MVP banking is default
      router?.push('/banking')
    } else {
      router?.push('/login')
    }
  }, [authenticating, authenticated])

  return null
}

export default Index
