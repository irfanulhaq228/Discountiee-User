import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { lightColors, darkColors } from './colors';

interface ThemeContextType {
    dark: boolean;
    colors: typeof lightColors;
    setScheme: (scheme: 'light' | 'dark') => void;
}

const defaultThemeContext: ThemeContextType = {
    dark: false,
    colors: lightColors,
    setScheme: () => { },
};

export const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const colorScheme = useColorScheme();
    const [isDark, setIsDark] = useState(colorScheme === 'dark');

    useEffect(() => {
        setIsDark(colorScheme === 'dark');
    }, [colorScheme]);

    const defaultTheme: ThemeContextType = {
        // dark: isDark,
        dark: false,
        // colors: isDark ? darkColors : lightColors,
        colors: lightColors,
        // setScheme: (scheme: 'light' | 'dark') => setIsDark(scheme === 'dark'),
        setScheme: (scheme: 'light' | 'dark') => setIsDark(false),
    };

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
