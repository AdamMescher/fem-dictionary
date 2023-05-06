'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';
import { FontContextProvider } from './Context/font';

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <ThemeProvider enableSystem={false}>
            <FontContextProvider>
                {children}
            </FontContextProvider>
        </ThemeProvider>
    )
}

export default Providers;