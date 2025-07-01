import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Stack,
  Chip,
} from '@mui/material';
import {
  Event as EventIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';

const EventCard = ({ event }) => {
  const handleCardClick = () => {
    if (event.website) {
      window.open(event.website, '_blank');
    }
  };

  const formatDateTime = (dateTimeStr) => {
    if (!dateTimeStr) return '';
    // Match DD.MM.YYYY HH:MM - HH:MM Uhr
    const match = dateTimeStr.match(/(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})/);
    if (match) {
      const [, day, month, year, startTime, endTime] = match;
      return `${day}.${month}.${year} ${startTime} - ${endTime} Uhr`;
    }
    // fallback: just return the string
    return dateTimeStr;
  };

  // Clean up description text
  const cleanDescription = (text) => {
    if (!text) return '';
    // Remove extra organization names and clean up text
    let cleaned = text.replace(/^[^A-Za-z]*/, '');
    // Remove organizer name duplicates
    if (event.organizer) {
      cleaned = cleaned.replace(new RegExp(event.organizer, 'gi'), '');
    }
    // Clean up and truncate
    cleaned = cleaned.substring(0, 120);
    return cleaned + (text.length > 120 ? '...' : '');
  };

  // Get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Tech Conference':
        return '#1976d2';
      case 'Music Festival':
        return '#9c27b0';
      case 'Art Exhibition':
        return '#f57c00';
      case 'Food Fair':
        return '#388e3c';
      case 'Workshop':
        return '#d32f2f';
      case 'Networking':
        return '#7b1fa2';
      default:
        return '#616161';
    }
  };

  return (
    <Card 
      elevation={0}
      onClick={handleCardClick}
      sx={{ 
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: 2,
        overflow: 'hidden',
        cursor: event.website ? 'pointer' : 'default',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: event.website ? 'translateY(-2px)' : 'none',
          boxShadow: event.website ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
        },
        minHeight: 120,
      }}
    >
      {/* Event Image */}
      <Box sx={{ flexShrink: 0, width: 120, height: 120 }}>
        {event.image ? (
          <CardMedia
            component="img"
            image={event.image}
            alt={event.title}
            sx={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        ) : (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg, ${getCategoryColor(event.category)} 0%, ${getCategoryColor(event.category)}80 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <EventIcon sx={{ fontSize: 32, color: 'white' }} />
          </Box>
        )}
      </Box>

      {/* Event Content */}
      <CardContent sx={{ 
        flex: 1, 
        p: 2,
        '&:last-child': { pb: 2 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <Box>
          {/* Event Title */}
          <Typography 
            variant="h6" 
            component="h3" 
            sx={{ 
              fontWeight: 600,
              lineHeight: 1.2,
              mb: 0.5,
              fontSize: '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {event.title}
          </Typography>

          {/* Event Category */}
          <Chip 
            label={event.category || 'Event'} 
            size="small"
            sx={{
              height: 20,
              fontSize: '0.75rem',
              fontWeight: 500,
              backgroundColor: getCategoryColor(event.category),
              color: 'white',
              mb: 1,
            }}
          />
        </Box>

        <Stack spacing={0.5}>
          {/* Date & Time */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <EventIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
              {formatDateTime(event.event_date_time)}
            </Typography>
          </Box>

          {/* Organizer */}
          {event.organizer && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <BusinessIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ 
                  fontSize: '0.85rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {event.organizer}
              </Typography>
            </Box>
          )}

          {/* Description */}
          {event.short_description && (
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ 
                fontSize: '0.8rem',
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                mt: 0.5,
              }}
            >
              {cleanDescription(event.short_description)}
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EventCard; 
