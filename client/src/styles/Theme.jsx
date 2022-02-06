import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const defaultTheme = createTheme();

const theme = createTheme({
    palette: {
        primary: {
            light: '#26ab59',
            main: '#e4e6e1'
        },
        secondary: {
            light: '#818a85',
            main: '#171717'
        },
        
    },
    typography: {
        fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`,
        fontSize: 12,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 800,
        button: {
            textTransform: 'none'
        }
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'primary' },
                    style: {
                        backgroundColor: 'none',
                        '&:hover': {
                            backgroundColor: "#e8e8e8",
                        },
                        height: '2rem'
                    },
                    props: {variant: 'secondary'},
                    style: {
                        backgroundColor: '#404040',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: "#07c400",
                            color: "white",
                        },
                        height: '2rem'
                    },
                    props: {variant: 'delete'},
                    style: {
                        backgroundColor: '#404040',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: "#cc1818",
                            color: "white",
                        },
                        height: '2rem'
                    },
                }
            ]
        },
        MuiFormControlLabel: {
            style: {
                fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`,
            }
        },
        MuiFormLabel: {
            style: {
                fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`,
            }
        },
    }
});

export default theme