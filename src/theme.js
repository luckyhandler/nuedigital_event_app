import { createTheme } from '@mui/material/styles';

// Material Design 3 Color Tokens - Expressive Theme
const materialTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6750A4',      // Purple primary from Material You
      light: '#EADDFF',     // Light purple surface
      dark: '#4A148C',      // Dark purple
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#625B71',      // Neutral variant
      light: '#E8DEF8',     // Light neutral variant
      dark: '#49454F',      // Dark neutral variant
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#7D5260',      // Tertiary color
      light: '#FFD8E4',     // Light tertiary
      dark: '#5A4A54',      // Dark tertiary
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#B3261E',      // Error color
      light: '#F9DEDC',     // Error container
      dark: '#8C1D18',      // Dark error
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#E6A23C',      // Warning color
      light: '#FEF7E0',     // Warning container
      dark: '#B7791F',      // Dark warning
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#2196F3',      // Info color
      light: '#E3F2FD',     // Info container
      dark: '#1976D2',      // Dark info
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',      // Success color
      light: '#E8F5E8',     // Success container
      dark: '#388E3C',      // Dark success
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFBFE',   // Surface
      paper: '#FFFFFF',     // Surface container
    },
    surface: {
      main: '#FEF7FF',      // Surface variant
      dark: '#E7E0EC',      // Surface container high
      light: '#F7F2FA',     // Surface container
    },
    onSurface: {
      main: '#1C1B1F',      // On surface
      variant: '#49454F',   // On surface variant
    },
    outline: {
      main: '#79747E',      // Outline
      variant: '#CAC4D0',   // Outline variant
    },
    text: {
      primary: '#1C1B1F',   // On surface
      secondary: '#49454F', // On surface variant
      disabled: '#79747E',  // Outline
    },
  },
  
  // Material Design 3 Typography Scale
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    
    // Display styles
    h1: {
      fontSize: '3.5rem',     // Display Large
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.8rem',     // Display Medium
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    h3: {
      fontSize: '2.25rem',    // Display Small
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    
    // Headline styles
    h4: {
      fontSize: '2rem',       // Headline Large
      fontWeight: 400,
      lineHeight: 1.25,
      letterSpacing: 0,
    },
    h5: {
      fontSize: '1.75rem',    // Headline Medium
      fontWeight: 400,
      lineHeight: 1.29,
      letterSpacing: 0,
    },
    h6: {
      fontSize: '1.5rem',     // Headline Small
      fontWeight: 400,
      lineHeight: 1.33,
      letterSpacing: 0,
    },
    
    // Title styles
    subtitle1: {
      fontSize: '1.375rem',   // Title Large
      fontWeight: 400,
      lineHeight: 1.27,
      letterSpacing: 0,
    },
    subtitle2: {
      fontSize: '1rem',       // Title Medium
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    
    // Body styles
    body1: {
      fontSize: '1rem',       // Body Large
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.03em',
    },
    body2: {
      fontSize: '0.875rem',   // Body Medium
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.02em',
    },
    
    // Label styles
    button: {
      fontSize: '0.875rem',   // Label Large
      fontWeight: 500,
      lineHeight: 1.43,
      letterSpacing: '0.01em',
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.75rem',    // Label Medium
      fontWeight: 500,
      lineHeight: 1.33,
      letterSpacing: '0.05em',
    },
    overline: {
      fontSize: '0.6875rem',  // Label Small
      fontWeight: 500,
      lineHeight: 1.45,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
    },
  },
  
  // Material Design 3 Shape Scale
  shape: {
    borderRadius: 12,        // Medium corner radius
  },
  
  // Material Design 3 Elevation
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
    '0px 1px 3px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
    '0px 2px 3px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
    '0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
    '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)',
    '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)',
    '0px 9px 15px 7px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)',
    '0px 11px 15px 7px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)',
    '0px 13px 19px 8px rgba(0, 0, 0, 0.15), 0px 5px 6px rgba(0, 0, 0, 0.3)',
    '0px 15px 22px 9px rgba(0, 0, 0, 0.15), 0px 6px 7px rgba(0, 0, 0, 0.3)',
    '0px 17px 26px 10px rgba(0, 0, 0, 0.15), 0px 7px 8px rgba(0, 0, 0, 0.3)',
    '0px 19px 29px 11px rgba(0, 0, 0, 0.15), 0px 8px 9px rgba(0, 0, 0, 0.3)',
    '0px 21px 33px 12px rgba(0, 0, 0, 0.15), 0px 9px 10px rgba(0, 0, 0, 0.3)',
    '0px 23px 36px 13px rgba(0, 0, 0, 0.15), 0px 10px 11px rgba(0, 0, 0, 0.3)',
    '0px 25px 40px 14px rgba(0, 0, 0, 0.15), 0px 11px 12px rgba(0, 0, 0, 0.3)',
    '0px 27px 43px 15px rgba(0, 0, 0, 0.15), 0px 12px 13px rgba(0, 0, 0, 0.3)',
    '0px 29px 47px 16px rgba(0, 0, 0, 0.15), 0px 13px 14px rgba(0, 0, 0, 0.3)',
    '0px 31px 50px 17px rgba(0, 0, 0, 0.15), 0px 14px 15px rgba(0, 0, 0, 0.3)',
    '0px 33px 54px 18px rgba(0, 0, 0, 0.15), 0px 15px 16px rgba(0, 0, 0, 0.3)',
    '0px 35px 57px 19px rgba(0, 0, 0, 0.15), 0px 16px 17px rgba(0, 0, 0, 0.3)',
    '0px 37px 61px 20px rgba(0, 0, 0, 0.15), 0px 17px 18px rgba(0, 0, 0, 0.3)',
    '0px 39px 64px 21px rgba(0, 0, 0, 0.15), 0px 18px 19px rgba(0, 0, 0, 0.3)',
    '0px 41px 68px 22px rgba(0, 0, 0, 0.15), 0px 19px 20px rgba(0, 0, 0, 0.3)',
  ],
  
  // Component customizations
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #6750A4 0%, #E8DEF8 100%)',
          minHeight: '100vh',
        },
      },
    },
    
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,        // Extra large corner radius
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
    
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,        // Large corner radius for buttons
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 24,
          paddingRight: 24,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 28,      // Extra large corner radius for search
            '&:hover fieldset': {
              borderColor: '#6750A4',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6750A4',
              borderWidth: 2,
            },
          },
        },
      },
    },
    
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          color: '#1C1B1F',
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,         // Small corner radius for chips
        },
      },
    },
  },
});

export default materialTheme; 