import {
  format,
  formatDistanceToNow,
  isToday,
  isWithinInterval,
  isYesterday,
  subDays,
} from 'date-fns';

export function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();

  // Less than 1 minute
  const distance = formatDistanceToNow(date, { addSuffix: false });
  if (distance === 'less than a minute') {
    return 'now';
  }

  // Less than 1 hour
  if (distance.includes('minute')) {
    return `${distance} ago`;
  }

  // Today
  if (isToday(date)) {
    return 'Today';
  }

  // Yesterday
  if (isYesterday(date)) {
    return 'Yesterday';
  }

  // Within a week
  if (isWithinInterval(date, { start: subDays(now, 7), end: now })) {
    return format(date, 'EEEE'); // Full weekday name
  }

  // More than a week - return dd/mm/yyyy format
  return format(date, 'dd/MM/yyyy');
}
