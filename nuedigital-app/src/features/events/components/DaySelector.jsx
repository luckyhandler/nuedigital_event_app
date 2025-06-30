import React from 'react';
import {
  Stack,
  Chip as MuiChip,
  Typography,
  Box
} from '@mui/material';

export const DaySelector = ({ 
  sortedDays, 
  groupedEvents, 
  selectedDay, 
  onDaySelect, 
  formatDateChip 
}) => {
  return (
    <Box sx={{ width: '100%', mb: 3 }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          overflowX: 'auto',
          pb: 2.5,
          px: 0,
          width: '100%',
          pr: 2,
          '&::-webkit-scrollbar': {
            height: 6,
          },
          '&::-webkit-scrollbar-thumb': {
            bgcolor: 'grey.200',
            borderRadius: 3,
          },
        }}
      >
        {sortedDays.map((dateKey) => {
          const dayEvents = groupedEvents[dateKey];
          const firstEvent = dayEvents[0];
          const displayDate = firstEvent.parsedDate;
          const isSelected = selectedDay === dateKey;
          return (
            <MuiChip
              key={dateKey}
              label={
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', minWidth: 0 }}>
                  <Typography variant="caption" display="block" sx={{ fontWeight: 600, width: '100%', minWidth: 0, textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {formatDateChip(displayDate)}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8, width: '100%', minWidth: 0, textAlign: 'center', whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                    {dayEvents.length} events
                  </Typography>
                </Box>
              }
              onClick={() => onDaySelect(dateKey)}
              sx={{
                width: 'auto',
                height: 'auto',
                py: 1.2,
                px: 2.5,
                borderRadius: 2,
                bgcolor: isSelected ? '#e6f0ea' : '#f6f8f6',
                color: isSelected ? 'primary.main' : 'text.primary',
                fontWeight: isSelected ? 700 : 500,
                fontSize: '1rem',
                boxShadow: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            />
          );
        })}
      </Stack>
    </Box>
  );
}; 