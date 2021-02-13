import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

export const GeneralProvider = ({children}) => {
    const [searchOpen, set_searchOpen] = useState(false);
    const [tooltipOpen, set_tooltipOpen] = useState(false);
    const [sidebarOpen, set_sidebarOpen] = useState(false);
    const [headerDetailsOpen, set_headerDetailsOpen] = useState(false);


    return (
        <GeneralContext.Provider
        value={{
            searchOpen,
            set_searchOpen,
            tooltipOpen,
            set_tooltipOpen,
            sidebarOpen,
            set_sidebarOpen,
            tooltipOpen,
            set_tooltipOpen,
            headerDetailsOpen,
            set_headerDetailsOpen,
        }}>
            {children}
        </GeneralContext.Provider>
    )
}