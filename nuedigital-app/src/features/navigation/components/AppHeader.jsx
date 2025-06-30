import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Chip
} from '@mui/material';
import { Event } from '@mui/icons-material';

export const AppHeader = ({ eventCount = 0 }) => {
  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        bgcolor: 'primary.main',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
      }}
    >
      <Toolbar>
        <Event sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nürnberg Digital Festival 2025
        </Typography>
        {eventCount > 0 && (
          <Chip 
            label={`${eventCount} Events`}
            color="secondary"
            variant="outlined"
            sx={{ 
              color: 'white', 
              borderColor: 'rgba(255, 255, 255, 0.3)',
              '& .MuiChip-label': { color: 'white' }
            }}
          />
        )}
      </Toolbar>
    </AppBar>
  );
}; 