import React from 'react';
import {
  Box,
  Typography,
  CircularProgress
} from '@mui/material';

export const LoadingSpinner = ({ message = 'Loading events...' }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="background.default"
    >
      <CircularProgress color="primary" />
      <Typography variant="h6" color="primary.main" sx={{ mt: 2 }}>
        {message}
      </Typography>
    </Box>
  );
}; 