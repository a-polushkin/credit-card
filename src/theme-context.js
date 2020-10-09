import React from 'react';

export const themes = {
    light: {
        header: {
            color: '#fff',
            background: '#1976d2',
        },
        button:{
            color: '#000000',
            background: '#1976d2',
        }

    },
    dark: {
        header:{
            foreground: '#fff',
            backgroundColor: '#333',
        },
        button:{
            color: '#000000',
            background: '#4a4a4a',
        }

    },
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});