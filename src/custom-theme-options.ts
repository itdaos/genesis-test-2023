import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        text: {
            primary: '#5A607D',
        },
        primary: {
            main: '#6367F6',
            light: '#EAEFFF',
        },
        success: {
            main: 'rgba(79,174,112,0.1)',
            contrastText: "#4FAE70"
        },
        background: {
            default: '#FFFFFF',
            paper: '#F9F9FA',
        },
        grey: {
            50: "#F9F9FA",
            100: "#EDEFF1"
        }
    },
    typography: {
        fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    },
    shape: {
        borderRadius: 10,
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: "#F9F9FA",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#EDEFF1 !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6367F6 !important"
                    }
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "capitalize"
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#EDEFF1",
                    backgroundColor: "#FFFFFF"
                }
            }
        }

    }
};