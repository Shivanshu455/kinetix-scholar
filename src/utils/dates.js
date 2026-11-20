const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function parseLocalDate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return null;
  const parts = dateStr.trim().split('-');
  if (parts.length !== 3) return null;
  const [y, m, d] = parts.map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

function getTodayMidnight() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export function isConferenceOpen(entry) {
  if (!entry || !entry.checkedOn || typeof entry.checkedOn !== 'string' || !entry.checkedOn.trim()) {
    return false;
  }
  if (!entry.deadline || typeof entry.deadline !== 'string' || !entry.deadline.trim()) {
    return false;
  }
  const deadlineDate = parseLocalDate(entry.deadline);
  if (!deadlineDate) return false;
  return deadlineDate >= getTodayMidnight();
}

export function filterAndSortIeeeConferences(conferences) {
  if (!Array.isArray(conferences)) return [];
  return conferences
    .filter(isConferenceOpen)
    .sort((a, b) => a.deadline.localeCompare(b.deadline));
}

export function formatSingleDate(dateStr) {
  const date = parseLocalDate(dateStr);
  if (!date) return '';
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatDateRange(startDateStr, endDateStr) {
  const start = parseLocalDate(startDateStr);
  const end = parseLocalDate(endDateStr);

  if (!start && !end) return '';
  if (start && !end) return formatSingleDate(startDateStr);
  if (!start && end) return formatSingleDate(endDateStr);

  const startDay = start.getDate();
  const endDay = end.getDate();
  const startMonth = start.getMonth();
  const endMonth = end.getMonth();
  const startYear = start.getFullYear();
  const endYear = end.getFullYear();

  if (startYear === endYear && startMonth === endMonth && startDay === endDay) {
    return `${startDay} ${MONTHS[startMonth]} ${startYear}`;
  }

  if (startYear === endYear && startMonth === endMonth) {
    return `${startDay} to ${endDay} ${MONTHS[startMonth]} ${startYear}`;
  }

  if (startYear === endYear) {
    return `${startDay} ${MONTHS[startMonth]} to ${endDay} ${MONTHS[endMonth]} ${startYear}`;
  }

  return `${startDay} ${MONTHS[startMonth]} ${startYear} to ${endDay} ${MONTHS[endMonth]} ${endYear}`;
}

export function getDeadlineRemainingText(deadlineStr) {
  const deadlineDate = parseLocalDate(deadlineStr);
  if (!deadlineDate) return '';

  const today = getTodayMidnight();
  const diffDays = Math.round((deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Closes tomorrow';
  if (diffDays > 1) return `${diffDays} days left`;
  return '';
}

export function getDeadlineDetails(deadlineStr) {
  const date = parseLocalDate(deadlineStr);
  if (!date) return null;

  const today = getTodayMidnight();
  const diffDays = Math.round((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  const day = String(date.getDate());
  const month = MONTHS[date.getMonth()].toUpperCase();
  const year = String(date.getFullYear());

  let remainingText = '';
  if (diffDays === 0) remainingText = 'Today';
  else if (diffDays === 1) remainingText = 'Closes tomorrow';
  else if (diffDays > 1) remainingText = `${diffDays} days left`;
  else remainingText = 'Closed';

  let urgency = 'green';
  if (diffDays <= 7) {
    urgency = 'coral';
  } else if (diffDays <= 29) {
    urgency = 'amber';
  } else {
    urgency = 'green';
  }

  return {
    day,
    month,
    year,
    diffDays,
    remainingText,
    urgency
  };
}

export function formatCheckedOnText(checkedOnStr) {
  const checkedDate = parseLocalDate(checkedOnStr);
  if (!checkedDate) return '';

  const today = getTodayMidnight();
  const diffDays = Math.floor((today.getTime() - checkedDate.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays > 30) {
    return `Checked ${diffDays} days ago. Confirm on the official site.`;
  }

  return `Checked on ${formatSingleDate(checkedOnStr)}`;
}
