import React, { createContext, useState } from 'react'

export const GeneralContext = createContext()

export const GeneralProvider = ({ children }) => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [headerDetailsOpen, setHeaderDetailsOpen] = useState(false)

  return (
        <GeneralContext.Provider
        value={{
          searchOpen,
          setSearchOpen,
          tooltipOpen,
          setTooltipOpen,
          sidebarOpen,
          setSidebarOpen,
          headerDetailsOpen,
          setHeaderDetailsOpen
        }}>
            {children}
        </GeneralContext.Provider>
  )
}
