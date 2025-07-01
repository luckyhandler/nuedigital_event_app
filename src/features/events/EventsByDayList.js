import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import EventCard from '../../components/EventCard';

const EventsByDayList = ({ groupedEvents, formatDate }) => {
  const dayEpochs = Object.keys(groupedEvents).map(Number).sort((a, b) => a - b);
  return (
    <Box>
      {dayEpochs.map(epoch => (
        <Box key={epoch} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
            {formatDate(groupedEvents[epoch][0].event_date_time)}
          </Typography>
          <Stack spacing={2}>
            {groupedEvents[epoch].map((event, idx) => (
              <EventCard key={idx} event={event} />
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default EventsByDayList; 