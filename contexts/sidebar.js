import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({children}) => {
    const [sidebarOpen, set_sidebarOpen] = useState(false);

    return (
        <SidebarContext.Provider
        value={{
            sidebarOpen,
            set_sidebarOpen
        }}>
            {children}
        </SidebarContext.Provider>
    )
}