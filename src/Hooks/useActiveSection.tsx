import React, {createContext, useContext, useState} from "react";

interface SectionContextInterface {
    activeId: string;
    setActive: (id: string) => void;
}

export const ActiveSectionContext = createContext({} as SectionContextInterface)

export const ActiveSectionProvider = ({children}: { children: React.ReactNode }): JSX.Element => {
    /**
    * Provider for determining which section is currently active.
    */

    const [activeId, setActiveId] = useState<string>('welcome-section');

    const setActive = ((id: string) => {
        setActiveId(() => id)
    })

    return <ActiveSectionContext.Provider value={{activeId, setActive}}>{children}</ActiveSectionContext.Provider>
}

export const useActiveSections = () => {
    return useContext(ActiveSectionContext);
};