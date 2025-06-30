import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { EventCard } from './EventCard';

export const EventList = ({ 
  selectedDayEvents, 
  selectedDayDisplayDate, 
  formatDate 
}) => {
  if (!selectedDayEvents || selectedDayEvents.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h6" color="text.secondary" textAlign="center">
          No events found for this day.
        </Typography>
      </Container>
    );
  }

  return (
    <Box>
      <Typography 
        variant="h3" 
        component="h2" 
        sx={{ 
          mb: 2, 
          color: 'primary.main',
          fontWeight: 700,
        }}
      >
        {formatDate(selectedDayDisplayDate)}
      </Typography>
      <Grid container spacing={3}>
        {selectedDayEvents.map((event, index) => (
          <Grid item xs={12} key={index} sx={{ mb: 2 }}>
            <EventCard event={event} accentColor="secondary.main" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}; 