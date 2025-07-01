import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import EventCard from '../../components/EventCard';

const UpcomingEventsList = ({ events }) => (
  <Stack spacing={2}>
    {events.length === 0 ? (
      <Box sx={{ textAlign: 'center', py: 6, color: 'text.secondary' }}>
        <Typography variant="body1">No upcoming events</Typography>
      </Box>
    ) : (
      events.map((event, idx) => <EventCard key={idx} event={event} />)
    )}
  </Stack>
);

export default UpcomingEventsList; 