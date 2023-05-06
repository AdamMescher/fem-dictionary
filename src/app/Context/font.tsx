'use client';

import * as React from 'react';

interface FontContextProps {
    children: React.ReactNode;
}

const FontContext = React.createContext<any>('inter');

export const FontContextProvider = ({ children }: FontContextProps) => {
    const [font, setFont] = React.useState('inter');

    return (
        <FontContext.Provider value={{font, setFont}}>
            {children}
        </FontContext.Provider>
    )
};

export const useFontContext = () => React.useContext(FontContext);