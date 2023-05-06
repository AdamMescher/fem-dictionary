'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <ThemeProvider enableSystem={false}>
            {children}
        </ThemeProvider>
    )
}

export default Providers;