import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCurrentAuth,
  selectCurrentUser,
} from "../redux/user/selectors"
import {
  setCurrentAuth,
  setCurrentUser,
  unsetCurrentAuth,
  unsetCurrentUser,
} from '../redux/user/actions'
import { useAuthentication } from '../services/auth-service'
import { getTokens } from '../libs/auth/src'
import { fetcherWithAuth } from '../api/fetcher'

export const useCurrentUser = () => {
  const [initial, setInitial] = useState<boolean>(false)
  const { authenticated } = useAuthentication({
    requireElevated: false,
  })
  const user = useSelector(selectCurrentUser)
  const auth = useSelector(selectCurrentAuth)
  const dispatch = useDispatch()

  const getData = async () => {
    try {
      const { accessToken } = getTokens()
      const [userRes, authRes] = await Promise.all([
        fetcherWithAuth('/auth/current-user', {
          method: 'GET',
        }),
        fetcherWithAuth('/auth/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: accessToken,
          }),
        }),
      ])

      if (userRes) {
        const converted = {
          ...userRes,
          displayName: [userRes.firstName, userRes.lastName]
            .filter(Boolean)
            .join(' '),
        }
        dispatch(setCurrentUser(converted))
      }

      if (authRes) {
        dispatch(setCurrentAuth(authRes))
      }
    } catch (e) {
      dispatch(unsetCurrentAuth())
      dispatch(unsetCurrentUser())
    } finally {
      setInitial(true)
    }
  }

  useEffect(() => {
    if (!authenticated) {
      return
    }

    if (!user && !auth) {
      getData()
      return
    }

    setInitial(true)
  }, [authenticated, user, auth])

  return {
    user,
    auth,
    initial,
  }
}
