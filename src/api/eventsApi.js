export async function fetchEvents() {
  const response = await fetch('/events.json');
  if (!response.ok) throw new Error('Failed to load events');
  return response.json();
} 