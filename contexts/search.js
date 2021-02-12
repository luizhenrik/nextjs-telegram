import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    const [searchOpen, set_searchOpen] = useState(false);

    return (
        <SearchContext.Provider
        value={{
            searchOpen,
            set_searchOpen
        }}>
            {children}
        </SearchContext.Provider>
    )
}