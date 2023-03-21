import React, { useState } from 'react'

interface AppDataContextProps {
  isMenuOpen: boolean
  isNotificationsOpen: boolean
}

const AppDataContext = React.createContext<any>([{}, () => { }])

const AppDataProvider = (props) => {
  const [state, _setState] = useState<AppDataContextProps>({
    isMenuOpen: false,
    isNotificationsOpen: false,
  })

  const setState = (updatedState) =>
    _setState((state) => ({ ...state, ...updatedState }))

  return (
    <AppDataContext.Provider value={[state, setState]}>
      {props.children}
    </AppDataContext.Provider>
  )
}

export { AppDataContext, AppDataProvider }
