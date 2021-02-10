import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({children}) => {
    const [isOpen, set_isOpen] = useState(false);

    return (
        <MenuContext.Provider
        value={{
            isOpen,
            set_isOpen
        }}>
            {children}
        </MenuContext.Provider>
    )
}