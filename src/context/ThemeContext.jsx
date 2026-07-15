import { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeContext = createContext({
    isDark: true,
    toggleTheme: () => { },
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => setIsDark((prev) => !prev);

    const muiTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: isDark ? 'dark' : 'light',
                    primary: {
                        main: '#00C3FF',
                    },
                    background: {
                        default: isDark ? '#02000E' : '#F5F7FA',
                        paper: isDark ? '#070A13' : '#FFFFFF',
                    },
                    text: {
                        primary: isDark ? '#E9E8EB' : '#1A1A2E',
                        secondary: isDark ? '#706F78' : '#5A5A72',
                    },
                },
                typography: {
                    fontFamily: 'Inter, Roboto, sans-serif',
                },
            }),
        [isDark]
    );
    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            <MuiThemeProvider theme={muiTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
