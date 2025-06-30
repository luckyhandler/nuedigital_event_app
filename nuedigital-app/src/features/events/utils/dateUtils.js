// Date formatting and utility functions
export const dateUtils = {
  // Format date for display (full format)
  formatDate(date) {
    if (!date) return 'No date';
    
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('de-DE', options);
  },

  // Format date for chip display (shorter version)
  formatDateChip(date) {
    if (!date) return 'No date';
    
    const options = { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('de-DE', options);
  },

  // Get sorted array of day keys
  getSortedDays(groupedEvents) {
    return Object.keys(groupedEvents).sort((a, b) => new Date(a) - new Date(b));
  },

  // Get first day from grouped events
  getFirstDay(groupedEvents) {
    const sortedDays = this.getSortedDays(groupedEvents);
    return sortedDays.length > 0 ? sortedDays[0] : null;
  }
}; 