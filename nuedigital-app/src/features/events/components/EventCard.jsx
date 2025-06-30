import React from 'react';
import { Box, Typography } from '@mui/material';

export const EventCard = ({ event, accentColor = 'secondary.main' }) => {
  const handleClick = () => {
    if (event.website) {
      window.open(event.website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Box
      display="flex"
      alignItems="flex-start"
      onClick={handleClick}
      p={1.5}
      sx={{
        cursor: event.website ? 'pointer' : 'default',
        transition: 'box-shadow 0.2s',
        '&:hover': event.website ? { boxShadow: '0 2px 12px 0 rgba(44,62,80,0.10)' } : {},
        borderRadius: 1,
      }}
    >
      {event.image && (
        <Box
          component="img"
          src={event.image}
          alt={event.title}
          sx={{
            width: 110,
            height: 70,
            objectFit: 'cover',
            borderRadius: 1,
            mr: 2.5,
            flexShrink: 0,
            bgcolor: '#f6f8f6',
          }}
        />
      )}
      <Box flex={1} minWidth={0}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: '1.18rem',
            mb: 0.5,
            color: 'text.primary',
            textAlign: 'left',
            lineHeight: 1.3,
            whiteSpace: 'normal',
            overflow: 'visible',
            textOverflow: 'unset',
            display: 'block',
          }}
        >
          {event.title}
        </Typography>
        {event.event_date_time && (
          <Typography
            variant="body1"
            sx={{
              color: accentColor,
              fontWeight: 500,
              fontSize: '1.01rem',
              mb: 0.2,
              textAlign: 'left',
              lineHeight: 1.3,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {event.event_date_time}
          </Typography>
        )}
        {event.category && (
          <Typography
            variant="body2"
            sx={{
              color: accentColor,
              fontWeight: 400,
              fontSize: '0.98rem',
              textAlign: 'left',
              lineHeight: 1.2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {event.category}
          </Typography>
        )}
        {event.short_description && (
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontWeight: 400,
              fontSize: '0.98rem',
              textAlign: 'left',
              lineHeight: 1.4,
              mt: 0.5,
              whiteSpace: 'normal',
              overflow: 'visible',
              textOverflow: 'unset',
              display: 'block',
            }}
          >
            {event.short_description}
          </Typography>
        )}
      </Box>
    </Box>
  );
}; 