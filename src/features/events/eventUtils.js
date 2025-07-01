// Event parsing, grouping, and filtering utilities

// Parse German date string to Date object
export function parseEventDate(dateTimeStr) {
  if (!dateTimeStr) return null;
  const match = dateTimeStr.match(/(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})/);
  if (match) {
    const [, day, month, year, hour, minute] = match;
    return new Date(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day, 10),
      parseInt(hour, 10),
      parseInt(minute, 10)
    );
  }
  return null;
}

// Get epoch for start of event day
export function getEventDayEpoch(dateTimeStr) {
  const date = parseEventDate(dateTimeStr);
  if (!date) return null;
  date.setHours(0, 0, 0, 0);
  return date.getTime();
}

// Determine event category
export function determineEventCategory(event) {
  const title = (event.title || '').toLowerCase();
  const description = (event.short_description || '').toLowerCase();
  if (title.includes('festival') || title.includes('music') || description.includes('music')) return 'Music Festival';
  if (title.includes('conference') || title.includes('tech') || title.includes('ki') || title.includes('digital')) return 'Tech Conference';
  if (title.includes('exhibition') || title.includes('art') || title.includes('gallery')) return 'Art Exhibition';
  if (title.includes('food') || title.includes('taste') || title.includes('culinary')) return 'Food Fair';
  if (title.includes('workshop') || title.includes('hands on')) return 'Workshop';
  if (title.includes('networking') || title.includes('meet')) return 'Networking';
  return 'Event';
}

// Get next 25 upcoming events (future only)
export function getUpcomingEvents(events) {
  const now = Date.now();
  return events
    .map(event => ({
      ...event,
      category: determineEventCategory(event),
      parsedDate: parseEventDate(event.event_date_time),
      dayEpoch: getEventDayEpoch(event.event_date_time)
    }))
    .filter(event => event.parsedDate && event.parsedDate.getTime() > now)
    .sort((a, b) => a.parsedDate - b.parsedDate)
    .slice(0, 25);
}

// Group events by day
export function groupEventsByDay(events) {
  const grouped = {};
  events.forEach(event => {
    const dayEpoch = getEventDayEpoch(event.event_date_time);
    if (!dayEpoch) return;
    if (!grouped[dayEpoch]) grouped[dayEpoch] = [];
    grouped[dayEpoch].push({
      ...event,
      category: determineEventCategory(event),
      parsedDate: parseEventDate(event.event_date_time),
      dayEpoch,
    });
  });
  return grouped;
} 