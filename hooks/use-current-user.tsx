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
      const [authRes] = await Promise.all([
        fetcherWithAuth('/auth/current-user', {
          method: 'GET',
        })
      ])

      if (authRes) {
        dispatch(setCurrentUser(authRes))
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
