import { useState, useEffect } from 'react';
import { eventService } from '../services/eventService';
import { dateUtils } from '../utils/dateUtils';

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [groupedEvents, setGroupedEvents] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load events data
  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch raw events data
        const rawEvents = await eventService.fetchEvents();
        
        // Process events with parsed dates
        const processedEvents = eventService.processEvents(rawEvents);
        setEvents(processedEvents);
        
        // Group events by day
        const grouped = eventService.groupEventsByDay(processedEvents);
        setGroupedEvents(grouped);
        
        // Set the first day as selected by default
        const firstDay = dateUtils.getFirstDay(grouped);
        if (firstDay) {
          setSelectedDay(firstDay);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error loading events:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  // Get sorted days for navigation
  const sortedDays = dateUtils.getSortedDays(groupedEvents);

  // Get events for selected day
  const selectedDayEvents = selectedDay ? groupedEvents[selectedDay] || [] : [];

  // Get selected day display date
  const selectedDayDisplayDate = selectedDayEvents.length > 0 
    ? selectedDayEvents[0].parsedDate 
    : null;

  return {
    // State
    events,
    groupedEvents,
    selectedDay,
    loading,
    error,
    
    // Computed values
    sortedDays,
    selectedDayEvents,
    selectedDayDisplayDate,
    
    // Actions
    setSelectedDay,
    
    // Utilities
    formatDate: dateUtils.formatDate,
    formatDateChip: dateUtils.formatDateChip,
  };
}; 