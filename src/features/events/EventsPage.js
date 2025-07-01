import React, { useEffect, useState } from 'react';
import { Container, Box, Tabs, Tab, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import materialTheme from '../../theme';
import { fetchEvents } from '../../api/eventsApi';
import { getUpcomingEvents, groupEventsByDay } from './eventUtils';
import UpcomingEventsList from './UpcomingEventsList';

const formatDate = (dateTimeStr) => {
  if (!dateTimeStr) return '';
  // Match DD.MM.YYYY HH:MM - HH:MM Uhr
  const match = dateTimeStr.match(/(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}:\d{2})/);
  if (match) {
    const [, day, month, year] = match;
    return `${day}.${month}.${year}`;
  }
  return dateTimeStr;
};

const EventsPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [groupedEvents, setGroupedEvents] = useState({});

  useEffect(() => {
    const load = async () => {
      try {
        const events = await fetchEvents();
        setUpcomingEvents(getUpcomingEvents(events));
        setGroupedEvents(groupEventsByDay(events));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    load();
  }, []);

  const allDayEpochs = Object.keys(groupedEvents).map(Number).sort((a, b) => a - b);
  const tabLabels = ['Upcoming Events', ...allDayEpochs.map(epoch => {
    const events = groupedEvents[epoch];
    if (!events || !events.length) return '';
    return formatDate(events[0].event_date_time);
  })];

  const getCurrentEvents = () => {
    if (selectedTab === 0) return upcomingEvents;
    const dayEpoch = allDayEpochs[selectedTab - 1];
    return groupedEvents[dayEpoch] || [];
  };

  if (loading) {
    return (
      <ThemeProvider theme={materialTheme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: 2, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h6" color="text.primary">Loading events...</Typography>
        </Box>
      </ThemeProvider>
    );
  }
  if (error) {
    return (
      <ThemeProvider theme={materialTheme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', p: 2, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h6" color="error">{error}</Typography>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={materialTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', pb: 4 }}>
        <Box sx={{ backgroundColor: 'white', pt: 3, pb: 2, mb: 0 }}>
          <Container maxWidth="sm">
            <Typography variant="h5" component="h1" sx={{ fontWeight: 600, textAlign: 'center', color: 'text.primary', fontSize: { xs: '1.3rem', sm: '1.5rem' } }}>
              Nürnberg Digital Festival 2025
            </Typography>
          </Container>
        </Box>
        <Box sx={{ backgroundColor: 'white', borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Container maxWidth="sm">
            <Tabs
              value={selectedTab}
              onChange={(_, v) => setSelectedTab(v)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  minHeight: 48,
                  minWidth: 80,
                },
                '& .Mui-selected': {
                  color: 'primary.main',
                },
              }}
            >
              {tabLabels.map((label, idx) => (
                <Tab key={idx} label={label} />
              ))}
            </Tabs>
          </Container>
        </Box>
        <Container maxWidth="sm">
          {selectedTab === 0 ? (
            <UpcomingEventsList events={upcomingEvents} />
          ) : (
            <UpcomingEventsList events={getCurrentEvents()} />
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default EventsPage; 