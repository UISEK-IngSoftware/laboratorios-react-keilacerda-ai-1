import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#003a70',
        },
        secondary: {
            main: '#f50057',
        },
        warning: {
            main: '#ff6900',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0693e3',
        },
        secondary: {
            main: '#f50057',
        },
        warning: {
            main: '#ff6900',
        },
    },
});