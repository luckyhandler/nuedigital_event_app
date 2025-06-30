// Event data fetching and processing service
export const eventService = {
  // Fetch events from the JSON file
  async fetchEvents() {
    try {
      const response = await fetch('/events.json');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  // Parse German date string to Date object
  parseGermanDate(dateString) {
    if (!dateString) return null;
    
    // Handle date ranges like "01. - 04.07.2025"
    if (dateString.includes(' - ') && dateString.includes('.')) {
      const parts = dateString.split(' - ');
      if (parts.length === 2) {
        const endDate = parts[1].trim();
        
        // Extract time if present
        const timeMatch = endDate.match(/(\d{2}\.\d{2}\.\d{4})\s*(.*)/);
        if (timeMatch) {
          const datePart = timeMatch[1];
          const timePart = timeMatch[2];
          
          // Parse the date part
          const [day, month, year] = datePart.split('.');
          const date = new Date(year, month - 1, day);
          
          // Add time if present
          if (timePart && timePart.includes(':')) {
            const timeMatch = timePart.match(/(\d{1,2}):(\d{2})/);
            if (timeMatch) {
              date.setHours(parseInt(timeMatch[1]), parseInt(timeMatch[2]));
            }
          }
          
          return date;
        }
      }
    }
    
    // Handle single dates like "01.07.2025 09:00 - 10:30 Uhr"
    const dateTimeMatch = dateString.match(/(\d{2}\.\d{2}\.\d{4})\s*(.*)/);
    if (dateTimeMatch) {
      const datePart = dateTimeMatch[1];
      const timePart = dateTimeMatch[2];
      
      const [day, month, year] = datePart.split('.');
      const date = new Date(year, month - 1, day);
      
      // Add time if present
      if (timePart && timePart.includes(':')) {
        const timeMatch = timePart.match(/(\d{1,2}):(\d{2})/);
        if (timeMatch) {
          date.setHours(parseInt(timeMatch[1]), parseInt(timeMatch[2]));
        }
      }
      
      return date;
    }
    
    return null;
  },

  // Process events with parsed dates
  processEvents(events) {
    return events.map(event => ({
      ...event,
      parsedDate: this.parseGermanDate(event.event_date_time)
    }));
  },

  // Group events by day
  groupEventsByDay(events) {
    const grouped = events.reduce((acc, event) => {
      if (event.parsedDate) {
        const dateKey = event.parsedDate.toDateString();
        if (!acc[dateKey]) {
          acc[dateKey] = [];
        }
        acc[dateKey].push(event);
      }
      return acc;
    }, {});
    
    // Sort events within each day by time
    Object.keys(grouped).forEach(dateKey => {
      grouped[dateKey].sort((a, b) => {
        if (a.parsedDate && b.parsedDate) {
          return a.parsedDate.getTime() - b.parsedDate.getTime();
        }
        return 0;
      });
    });
    
    return grouped;
  }
}; 