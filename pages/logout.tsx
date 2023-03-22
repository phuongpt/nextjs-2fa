import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { logOut } from '../api/auth/methods'
import { useDispatch } from 'react-redux'
import { unsetCurrentAuth, unsetCurrentUser } from '../redux/user/actions'
import { LOG_OUT } from '../redux/auth/types'

const Logout = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLogout = async () => {
      await logOut();
      dispatch({ type: LOG_OUT })
      dispatch(unsetCurrentUser())
      dispatch(unsetCurrentAuth())
      router.push('/');
    }
    handleLogout();
  }, [])

  return null
}

export default Logout
