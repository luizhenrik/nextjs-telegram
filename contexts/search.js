import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    const [isOpen_search, set_isOpen_search] = useState(false);

    return (
        <SearchContext.Provider
        value={{
            isOpen_search,
            set_isOpen_search
        }}>
            {children}
        </SearchContext.Provider>
    )
}