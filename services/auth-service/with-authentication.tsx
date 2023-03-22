import React, { useEffect, useState, useMemo } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import * as Auth from '@/api/auth/methods'
import { useAuthentication } from '.'
import { useSession } from './use-session'
import { DateTime } from 'luxon'
import { getLocalStorageItem, StorageKey } from '@/utils/local-storage'
import { createLogInPath } from '@/routing/auth'

/**
 * Allows authenticated users to render the component. Unauthenticated users
 * are redirected to log in. Authentication level is not considered.
 */
export const withAuthentication =
  () => (Component: React.ComponentType) => (props: any) => {
    const router = useRouter()
    const { authenticating, authenticated } = useAuthentication({
      requireElevated: false,
    })

    const [counterShown, toggleCounter] = useState(false)
    const convertTime = (time) => {
      const expiredTime = !time ? 0 : +time
      const expiredTimeDate = DateTime.fromMillis(expiredTime)
      const idle = expiredTimeDate.diffNow(['seconds']).toObject()
      return Math.abs(Math.round(idle.seconds))
    }

    useEffect(() => {
      if (authenticated) {
        const timer = setInterval(() => {
          if (getLocalStorageItem(StorageKey.TDBR_COUNT)) {
            if (convertTime(getLocalStorageItem(StorageKey.TDBR_COUNT)) > 900) {
              toggleCounter(true)
            }
          } else {
            toggleCounter(false)
            if (convertTime(props.getLastActiveTime()) > 900)
              toggleCounter(true)
          }
        }, 1000 * 15 * 60)
        return () => clearInterval(timer)
      }
    }, [authenticated])

    const { sessionExpired, changeSessionState } = useSession()

    useEffect(() => {
      if ((!authenticating && !authenticated) || sessionExpired) {
        Auth.logOut().finally(() => {
          router.push(createLogInPath(router.asPath))
        })
      }
    }, [authenticating, authenticated, document.location, sessionExpired])

    const extendedProps = {
      ...props,
      sessionExpired,
      toggleSessionStatus: changeSessionState,
    }

    const cls = useMemo(() => {
      return classNames([
        router.asPath === '/channel' ? 'main' : 'pages',
        { show: counterShown },
      ])
    }, [router.asPath, counterShown])

    return (
      authenticated && (
        <div>
          {<Component {...extendedProps} />}
        </div>
      )
    )
  }
