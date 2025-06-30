import { createTheme } from '@mui/material/styles';

// Create Material 3 theme with dark yellow as seed color
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#18392b', // Dark green for headings
      contrastText: '#fff',
    },
    secondary: {
      main: '#4b8a6e', // Accent green
      contrastText: '#fff',
    },
    background: {
      default: '#eaf5ef', // Very light green/gray
      paper: '#ffffff', // Main card
    },
    text: {
      primary: '#111', // Almost black
      secondary: '#4b8a6e', // Accent green for meta
    },
  },
  shape: {
    borderRadius: 32,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.6rem',
      lineHeight: 1.1,
      letterSpacing: '-0.5px',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.15,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.3rem',
      lineHeight: 1.2,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.08rem',
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.98rem',
      lineHeight: 1.43,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.24)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontWeight: 500,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
          fontWeight: 500,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
  },
}); 