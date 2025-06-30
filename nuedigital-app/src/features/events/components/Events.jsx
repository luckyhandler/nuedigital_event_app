import React from 'react';
import { Box, Typography } from '@mui/material';
import { DaySelector } from './DaySelector';
import { EventList } from './EventList';
import { useEvents } from '../hooks/useEvents';
import { LoadingSpinner } from '../../../shared/components';

export const Events = () => {
  const {
    groupedEvents,
    selectedDay,
    loading,
    error,
    sortedDays,
    selectedDayEvents,
    selectedDayDisplayDate,
    setSelectedDay,
    formatDate,
    formatDateChip,
  } = useEvents();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="error" gutterBottom>
          Error loading events
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          mb: 3,
          mt: 2,
          fontWeight: 700,
          fontSize: { xs: '2.1rem', sm: '2.6rem' },
          textAlign: 'left',
        }}
      >
        Nürnberg Digital Festival 2025
      </Typography>
      <Box sx={{ mb: 3 }}>
        <DaySelector
          sortedDays={sortedDays}
          groupedEvents={groupedEvents}
          selectedDay={selectedDay}
          onDaySelect={setSelectedDay}
          formatDateChip={formatDateChip}
        />
      </Box>
      <EventList
        selectedDayEvents={selectedDayEvents}
        selectedDayDisplayDate={selectedDayDisplayDate}
        formatDate={formatDate}
      />
    </Box>
  );
}; 