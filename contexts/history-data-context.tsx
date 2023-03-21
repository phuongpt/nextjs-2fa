import React, { useState } from 'react'

type HistoryDataContextProps = {
  shouldUpdate: boolean
  setShouldUpdate: (set: boolean) => void
}

export const HistoryDataContext = React.createContext({
  shouldUpdate: false,
} as HistoryDataContextProps)

export const HistoryDataProvider = ({ children }) => {
  const [shouldUpdate, setShouldUpdate] = useState<boolean>(false)

  return (
    <HistoryDataContext.Provider
      value={{
        shouldUpdate,
        setShouldUpdate,
      }}
    >
      {children}
    </HistoryDataContext.Provider>
  )
}
