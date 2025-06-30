import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme';
import { Events } from './features/events/components/Events';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', p: { xs: 1, sm: 3 } }}>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: '0 2px 16px 0 rgba(44, 62, 80, 0.07)',
            maxWidth: 1200,
            mx: 'auto',
            my: { xs: 1, sm: 3 },
            p: { xs: 2, sm: 4 },
            minHeight: '90vh',
          }}
        >
          <Events />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
