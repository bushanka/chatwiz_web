import React from 'react';
import ThemeProvider from './ThemeProvider';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';

export const withTheme = (Component: React.ComponentType) => {
    return () => {
        const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

        return (
            <ThemeProvider initialTheme={defaultTheme}>
                <Component />
            </ThemeProvider>
        );
    };
};
